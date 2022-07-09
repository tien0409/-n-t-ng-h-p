import RecommendedTopics from './RecommendedTopics';
import {
  SearchWrapper,
  Wrapper,
  DropdownWrapper,
  TopicItem,
  Input,
  SearchIcon,
  SectionTitle,
  SpaceSeparate,
} from './styles/aside';
import SuggestedUsers from './SuggestedUsers';
import {toast} from 'react-toastify';
import {KeyboardEvent, useState} from 'react';
import {Link} from 'react-router-dom';

const Aside = () => {
  const recommended = [
    'Technology',
    'Money',
    'Business',
    'Art',
    'Photographic',
  ];
  const [search, setSearch] = useState('');
  const [topicList, setTopicList] = useState([]);
  const [focusInput, setFocusInput] = useState(false);

  const handleSearch = async (e: KeyboardEvent<HTMLInputElement>) => {
    if(e.key === 'Enter') {
      const res = await fetch(`${process.env.REACT_APP_API_URL_2}/spring-leaf/topic/find?input=${search}`).then(_res => _res.json());

      if(res.error === 0) {
        setTopicList(res.topics);
      } else {
        toast.error(res.error_desc);
      }
    }
  };

  return (
    <Wrapper>
      {/*<Button variant="black" full rounded>*/}
      {/*  Get unlimited access*/}
      {/*</Button>*/}

      <SearchWrapper>
        <SearchIcon size={19} />
        <Input onFocus={() => setFocusInput(true)} onKeyDown={handleSearch} value={search} onChange={e => setSearch(e.currentTarget.value)} placeholder="Search" spellCheck={false}  />
        {topicList.length && focusInput ? (
          <DropdownWrapper>
            {topicList.map((topic: any) => (
              <Link key={topic.id} to={`/subjects/${topic.subject.id}/topics/${topic.id}`}>
                <TopicItem>{topic.name}</TopicItem>
              </Link>
            ))}
          </DropdownWrapper>
        ): null}
      </SearchWrapper>

      <SpaceSeparate height={35} />

      <SectionTitle>Recommended topics</SectionTitle>
      <RecommendedTopics recommendedTopics={recommended} />

      <SpaceSeparate height={35} />

      <SectionTitle>Who to follow</SectionTitle>
      <SuggestedUsers />
    </Wrapper>
  );
};

export default Aside;
