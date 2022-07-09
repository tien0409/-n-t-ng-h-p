import {Editor} from '@tinymce/tinymce-react';
import {FormEvent, useContext, useMemo, useState} from 'react';
import Select from 'react-select';

import {Wrapper, Title, Form, InputWrapper, Label, SubLabel, Input, ButtonWrapper} from './styles/subject-create';
import {AuthContext, Button} from '@/components';
import {toast} from 'react-toastify';

const PostCreate = () => {
  const {userInfo} = useContext(AuthContext);
  const [subject, setSubject] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const res = await fetch(`${process.env.REACT_APP_API_URL_2}/spring-leaf/subject/create`, {
      method : 'post',
      body: JSON.stringify({
        name: subject,
      }),
      headers: {
        auth: userInfo?.token || ''
      }
    }).then(_res => _res.json());

    if(res.error === 0) {
      toast.success('Create Subject Success');
      setSubject('');
    }
  };

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <InputWrapper>
          <Label htmlFor="subject">Subject</Label>
          <Input value={subject} onChange={e => setSubject(e.currentTarget.value)}  />
        </InputWrapper>

        <ButtonWrapper>
          <Button type="submit" size='lg' variant='primary'>Create Subject</Button>
        </ButtonWrapper>
      </Form>
    </Wrapper>
  );
};

export default PostCreate;
