import format from 'date-fns/formatRelative';
import {BiUpvote, BiDownvote, BiComment} from 'react-icons/bi';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import {
  Wrapper,
  CreatorWrapper,
  AvatarWrapper,
  DrawerWrapper,
  Username,
  MainContentWrapper,
  Title,
  Content,
  UserWrapper,
  ActionList,
  ActionItem,
  CreatedAt,
  ActionText
} from './styles/post-detail';
import {AuthContext, Image} from '@/components';
import {toast} from 'react-toastify';
import {useContext, useState} from 'react';
import CommentInput from './CommentInput';
import CommentList from './CommentList';
import {setup} from 'medium-editor';

type Props = {
  postDetail: any
  commentList: any[]
  setUpdate: (a: any) => void,
  setCommentList: (a: any[]) => void
}

const PostDetail = ({postDetail, setUpdate, commentList, setCommentList}: Props) => {
  const {userInfo, isAuthen} = useContext(AuthContext);
  const [toggleComment, setToggleComment] = useState(false);

  const handleVote = async (type: 'UPVOTE' | 'DOWNVOTE') => {
    const res = await fetch(`${process.env.REACT_APP_API_URL}/spring-leaf/user/vote-post`, {
      method: 'post',
      body: JSON.stringify({
        post_id: postDetail.id,
        vote_type: type
      }),
      headers: {
        auth: userInfo?.token || ''
      }
    }).then(_res => _res.json());

    if (res.error === 0) {
      toast.success('Success');
      setUpdate({});
    } else {
      toast.error(res.error_desc);
    }
  };

  return (
    <Wrapper>
      <CreatorWrapper>
        <UserWrapper>
          <AvatarWrapper>
            <Image src={'asdasd'} alt={'asdasd'}/>
          </AvatarWrapper>
          <Username>{( postDetail?.user?.first_name || '' ) + ' ' + ( postDetail?.user?.last_name || '' )}</Username>
        </UserWrapper>

        {postDetail.create_date && (
          <CreatedAt>{format(new Date(postDetail?.create_date), new Date())}</CreatedAt>
        )}
      </CreatorWrapper>

      <MainContentWrapper>
        <Content dangerouslySetInnerHTML={{__html: postDetail?.content || ''}}></Content>
      </MainContentWrapper>

      {isAuthen && (

        <ActionList>
          {postDetail?.votes?.find(( vote: any ) => vote?.type === 'UPVOTE' &&  vote?.user?.id === userInfo?.id) ? (
            <ActionItem onClick={() => handleVote('DOWNVOTE')}>
              <BiDownvote />
              <ActionText>{postDetail?.votes?.filter( ( vote: any ) => vote.type === 'UPVOTE').length || 0}</ActionText>
            </ActionItem>
          ): (
            <ActionItem onClick={() => handleVote('UPVOTE')}>
              <BiUpvote />
              <ActionText>{postDetail?.votes?.filter( ( vote: any ) => vote.type === 'UPVOTE').length || 0}</ActionText>
            </ActionItem>
          )}
          {isAuthen && (
            <ActionItem onClick={() => setToggleComment(true)}>
              <BiComment />
              <ActionText>{commentList.length}</ActionText>
            </ActionItem>

          )}
        </ActionList>
      )}

      <Drawer style={{overflowY: 'auto'}} size="30%" open={toggleComment} direction={'right'} onClose={() => setToggleComment(false)}>
        <DrawerWrapper>

          <CommentInput setUpdate={setUpdate} setCommentList={setCommentList} commentList={commentList} postId={postDetail?.id || ''} />
          <CommentList setUpdate={setUpdate} commentList={commentList} />
        </DrawerWrapper>
      </Drawer>

    </Wrapper>
  );
};

export default PostDetail;
