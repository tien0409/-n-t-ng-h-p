import format from 'date-fns/formatRelative';
import {
  Link,
  AvatarWrapper,
  Content,
  CreateDate,
  CreatorWrapper,
  Item,
  MainContentWrapper,
  PostImageWrapper,
  MainContent,
  Title,
  Username,
  Wrapper,
} from './styles/post-list';
import { Image } from '@/components';

type Props = {
  postList: any[]
  topicId: string | undefined
}

const PostList = ({postList, topicId}: Props) => {
  return (
    <>
      {postList?.map(post => (
        <Wrapper key={post.id}>
          <Link to={`/topics/${topicId}/posts/${post.id}`}>
            <Item>
              <CreatorWrapper>
                <AvatarWrapper>
                  <Image src={post.user.avatar} alt="abc" />
                </AvatarWrapper>
                <Username>{(post.user.first_name || '') + ' ' + (post.user.last_name || '')}</Username>
                <CreateDate>&nbsp;- { format(new Date(post.create_date), new Date()) }</CreateDate>
              </CreatorWrapper>

              <MainContentWrapper>
                <MainContent>
                  <Content dangerouslySetInnerHTML={{__html: post.content}}></Content>
                </MainContent>
              </MainContentWrapper>
            </Item>
          </Link>
        </Wrapper>
      ))}
    </>

  );
};

export default PostList;
