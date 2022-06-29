import {useContext, useEffect, useMemo, useState} from 'react';
import {useSearchParams} from 'react-router-dom';

import {AuthContext, SubjectList, TopicList} from '@/components';
import {DefaultLayout, RootLayout} from '@/layouts';

const HomePage = () => {
  const {isAuthen} = useContext(AuthContext);
  const [searchParams] = useSearchParams();
  const [subjectList, setSubjectList] = useState([]);
  const [topicList, setTopicList] = useState([]);

  const Layout = useMemo(
    () => (isAuthen ? DefaultLayout : RootLayout),
    [isAuthen]
  );

  useEffect(() => {
    const getSubjects = async () => {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/spring-leaf/subject/all`).then(_res => _res.json());
      setSubjectList(res.subjects);
    };

    getSubjects();
  }, []);

  useEffect(() => {
    const getTopics = async () => {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/spring-leaf/topic/get-post-by-subject?subject_id=${searchParams.get('subjects')}`).then(_res => _res.json());
      setTopicList(res.topics);
    };

    if(subjectList[0]) {
      getTopics();
    }
  }, [searchParams, subjectList]);
  console.log('subjectList', subjectList);

  return <Layout>
    {isAuthen && <>
      <SubjectList subjectList={subjectList}/>
      <TopicList subjectId={searchParams.get('subjects')} topicList={topicList}/>
    </>
    }  </Layout>;
};

export default HomePage;
