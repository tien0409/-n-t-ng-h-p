import {Editor} from '@tinymce/tinymce-react';
import {FormEvent, useContext, useMemo, useState} from 'react';
import Select from 'react-select';

import {Wrapper, Title, Form, InputWrapper, Label, SubLabel, Input, ButtonWrapper} from './styles/topic-create';
import {AuthContext, Button} from '@/components';
import {toast} from 'react-toastify';

type Props = {
  subjectList: any[];
  subjectSelected: string,
  setSubjectSelected: (a: string) =>void ,
}

const PostCreate = ({subjectList, subjectSelected, setSubjectSelected}: Props) => {
  const {userInfo} = useContext(AuthContext);
  const [topic, setTopic] = useState('');

  const options = useMemo(() => {
    return subjectList.map(subject => ({value: subject.id, label: subject.name}));
  }, [subjectList]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const res = await fetch(`${process.env.REACT_APP_API_URL_2}/spring-leaf/topic/add`, {
      method : 'post',
      body: JSON.stringify({
        name: topic,
        subject_id: subjectSelected
      }),
      headers: {
        auth: userInfo?.token || ''
      }
    }).then(_res => _res.json());

    if(res.error === 0) {
      toast.success('Create Topic Success');
      setTopic('');
      setSubjectSelected('');
    }
  };

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <InputWrapper>
          <Label htmlFor="subject">Subject</Label>
          <Select styles={{menu: provided => ({...provided, zIndex: 9999})}} options={options} onChange={( e: any ) => setSubjectSelected(e.value)} />
        </InputWrapper>
        <InputWrapper>
          <Label htmlFor="subject">Topic</Label>
          <Input value={topic} onChange={e => setTopic(e.currentTarget.value)}  />
        </InputWrapper>

        <ButtonWrapper>
          <Button type="submit" size='lg' variant='primary'>Create Topic</Button>
        </ButtonWrapper>
      </Form>
    </Wrapper>
  );
};

export default PostCreate;
