import {Editor} from '@tinymce/tinymce-react';
import {FormEvent, useContext, useState} from 'react';
import {v4 as uuidv4} from 'uuid';

import {Wrapper, Form, ButtonWrapper, ButtonSend} from './styles/comment-input';
import {toast} from 'react-toastify';
import {AuthContext} from '@/components';

type Props = {
  commentList: any[]
  setCommentList: (a: any[]) => void
  postId: string;
  setUpdate: (a: any) => void
}

const CommentInput = ({postId, setUpdate, setCommentList, commentList} : Props) => {
  const {userInfo} = useContext(AuthContext);
  const [content, setContent] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const res = await fetch(`${process.env.REACT_APP_API_URL_2}/spring-leaf/comment/add`, {
      method : 'post',
      body: JSON.stringify({
        post_id: postId,
        content
      }),
      headers: {
        auth: userInfo?.token || ''
      }
    }).then(_res => _res.json());

    if(res.error === 0) {
      toast.success('Comment success');
      setUpdate({});
      setContent('');
    } else {
      toast.error(res.error_desc);
    }
  };

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <Editor
          apiKey="qagffr3pkuv17a8on1afax661irst1hbr4e6tbv888sz91jc"
          value={content}
          onEditorChange={(e) => setContent(e)}
          init={{
            height: 200,
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
        <ButtonWrapper>
          <ButtonSend type={'submit'} variant={'primary'}>Send</ButtonSend>
        </ButtonWrapper>
      </Form>
    </Wrapper>
  );
};

export default CommentInput;
