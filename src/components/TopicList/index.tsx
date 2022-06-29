import {
  Link,
  CreatorWrapper,
  AvatarWrapper,
  ItemWrapper,
  Username,
  CreateDate,
  MainContentWrapper,
  Session,
  Title,
  Wrapper
} from './styles/topic-list';
import {Image} from '@/components';

type Props = {
  topicList: any[]
  subjectId: string | null
}

const TopicList = ({topicList, subjectId}: Props) => {
  return  <Wrapper>

    {topicList?.map(topic =>(
      <ItemWrapper key={topic.id}>
        <CreatorWrapper>
          <Link to={`/subjects/${subjectId}/topics/${topic.id}`}>
            <MainContentWrapper>
              <Session>{topic.name}</Session>
            </MainContentWrapper>
          </Link>
          <CreateDate> Jun 13</CreateDate>
        </CreatorWrapper>

      </ItemWrapper>
    )) }
  </Wrapper>;
};

export default TopicList;
