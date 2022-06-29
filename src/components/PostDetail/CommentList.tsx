import {FaTrash} from 'react-icons/fa';
import format from 'date-fns/formatRelative';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css';

import { Wrapper, CreatedAt, AvatarWrapper, CreatorWrapper, UserWrapper, CommnetItem, Username, Content } from './styles/comment-list';
import {AuthContext, Image} from '@/components';
import {toast} from 'react-toastify';
import {useContext} from 'react';

type Props = {
  commentList: any[]
  setUpdate: (a: any) => void;
}

const CommentList = ({commentList, setUpdate}: Props) => {
  const {userInfo} = useContext(AuthContext);

  const handleRemove = async (id: string) => {
    if(confirm('Are your sure?')) {
      const res = await fetch(`${process.env.REACT_APP_API_URL_2}/spring-leaf/comment/delete`, {
        method : 'delete',
        body: JSON.stringify({
          comment_id: id
        }),
        headers: {
          auth: userInfo?.token || ''
        }
      }).then(_res => _res.json());

      if(res.error === 0) {
        toast.success('Remove comment success');
        setUpdate({});
      } else {
        toast.error(res.error_desc);
      }
    }
  };

  return (
    <Wrapper>
      {commentList.map(comment => (
        <CommnetItem key={comment.id}>
          <CreatorWrapper>
            <UserWrapper>
              <AvatarWrapper>
                <Image src="asdas" alt="asd" />
              </AvatarWrapper>
              <Username>{(comment.user.first_name || '') + ' ' + (comment.user.last_name || '')}</Username>
              <CreatedAt>&nbsp;- {format(new Date(comment.time), new Date())}</CreatedAt>
            </UserWrapper>

            {comment.user.id === userInfo?.id && (
              <FaTrash style={{cursor: 'pointer'}} onClick={() => handleRemove(comment.id)} />
            )}
          </CreatorWrapper>

          {userInfo?.id === comment.user.id && (
            <Content dangerouslySetInnerHTML={{__html: comment.content}} />
          )}
        </CommnetItem>
      ))}
    </Wrapper>
  );
};

export default CommentList;
