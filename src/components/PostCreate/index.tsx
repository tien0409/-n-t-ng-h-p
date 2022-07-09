import {Editor} from '@tinymce/tinymce-react';
import {FormEvent, useContext, useMemo, useState} from 'react';
import Select from 'react-select';

import {Wrapper, Title, Form, InputWrapper, Label, SubLabel, Input, ButtonWrapper} from './styles/post-create';
import {AuthContext, Button} from '@/components';
import subjectList from '@/components/SubjectList';
import topicList from '@/components/TopicList';
import {toast} from 'react-toastify';

type Props = {
  subjectList: any[];
  topicList: any[];
  subjectSelected: string,
  topicSelected: string,
  setTopicSelected: (a: string) =>void ,
  setSubjectSelected: (a: string) =>void ,
}

const PostCreate = ({subjectList, topicList, subjectSelected, topicSelected, setSubjectSelected, setTopicSelected}: Props) => {
  const {userInfo} = useContext(AuthContext);
  const [content, setContent] = useState('');

  const options = useMemo(() => {
    return subjectList.map(subject => ({value: subject.id, label: subject.name}));
  }, [subjectList]);

  const optionsTopic = useMemo(() => {
    return topicList?.map(subject => ({value: subject.id, label: subject.name}));
  }, [topicList]);


  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const res = await fetch(`${process.env.REACT_APP_API_URL_2}/spring-leaf/post/create-post`, {
      method : 'post',
      body: JSON.stringify({
        id_subject: subjectSelected,
        id_topic: topicSelected,
        content,
      }),
      headers: {
        auth: userInfo?.token || ''
      }
    }).then(_res => _res.json());

    if(res.error === 0) {
      toast.success('Create Post Success');
      setContent('');
    } else {
      toast.error(res.error_desc);
    }

  };

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <InputWrapper>
          <Label htmlFor="subject">Subject</Label>
          <SubLabel>Select subjects -&gt; create new post or create new topic</SubLabel>
          <Select styles={{menu: provided => ({...provided, zIndex: 9999})}} options={options} onChange={( e: any ) => setSubjectSelected(e.value)} />
        </InputWrapper>

        <InputWrapper>
          <Label htmlFor="title">Topic</Label>
          <Select styles={{menu: provided => ({...provided, zIndex: 9999})}} options={optionsTopic} onChange={( e: any ) => setTopicSelected(e.value)} />
        </InputWrapper>

        <InputWrapper>
          <Label>Content</Label>
          <Editor
            apiKey="qagffr3pkuv17a8on1afax661irst1hbr4e6tbv888sz91jc"
            value={content}
            onEditorChange={(e) => setContent(e)}
            init={{
              height: 500,
              menubar: false,
              plugins: [
                'advlist autolink lists link image charmap print preview anchor',
                'searchreplace visualblocks code fullscreen',
                'insertdatetime media table paste code help wordcount'
              ],
              toolbar: 'undo redo | formatselect | ' +
                'bold italic backcolor | alignleft aligncenter ' +
                'alignright alignjustify | bullist numlist outdent indent | ' +
                'removeformat | help',
              content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
            }}
          />
        </InputWrapper>

        <ButtonWrapper>
          <Button type="submit" size='lg' variant='primary'>Create Post</Button>
        </ButtonWrapper>
      </Form>
    </Wrapper>
  );
};

export default PostCreate;
