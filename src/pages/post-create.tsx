import {CreateLayout} from '@/layouts';
import {PostCreate, SubjectCreate} from '@/components';
import {useEffect, useState} from 'react';
import {useSearchParams} from 'react-router-dom';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import TopicCreate from '@/components/TopicCreate';

const PostCreatePage = () => {
  const [searchParams] = useSearchParams();
  const [subjectList, setSubjectList] = useState([]);
  const [topicList, setTopicList] = useState([]);
  const [subjectSelected, setSubjectSelected] = useState('');
  const [topicSelected, setTopicSelected] = useState('');
  const [tabIndex, setTabIndex] = useState(0);

  useEffect(() => {
    const getSubjects = async () => {
      const res = await fetch(`${process.env.REACT_APP_API_URL_2}/spring-leaf/subject/all`).then(_res => _res.json());
      setSubjectList(res.subjects);
    };

    getSubjects();
  }, [tabIndex]);

  useEffect(() => {
    const getTopics = async () => {
      const res = await fetch(`${process.env.REACT_APP_API_URL_2}/spring-leaf/topic/get-post-by-subject?subject_id=${subjectSelected}`).then(_res => _res.json());
      setTopicList(res.topics);
    };
    getTopics();
  }, [searchParams, subjectSelected]);

  const handleReset = (index: any) => {
    setTabIndex(index);
    setTopicList([]);
    setSubjectSelected('');
    setTopicSelected('');
  };

  return (
    <CreateLayout>
      <Tabs selectedIndex={tabIndex} onSelect={index => handleReset(index)}>
        <TabList>
          <Tab>Create Post</Tab>
          <Tab>Create Topic</Tab>
          <Tab>Create Subject</Tab>
        </TabList>

        <TabPanel>
          <PostCreate
            subjectSelected={subjectSelected}
            topicSelected={topicSelected}
            setTopicSelected={setTopicSelected}
            topicList={topicList} subjectList={subjectList} setSubjectSelected={setSubjectSelected}/>
        </TabPanel>
        <TabPanel>
          <TopicCreate subjectSelected={subjectSelected} setSubjectSelected={setSubjectSelected}
            subjectList={subjectList}/>
        </TabPanel>
        <TabPanel>
          <SubjectCreate/>
        </TabPanel>
      </Tabs>
    </CreateLayout>
  );
};

export default PostCreatePage;
