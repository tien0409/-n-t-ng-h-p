import {useEffect, useState} from 'react';

import {DefaultLayout} from '@/layouts';
import {PageHeader, PostList} from '@/components';
import {useParams} from 'react-router-dom';

const TopicDetailPage = () => {
  const params = useParams();

  const [postList, setPostList] = useState([]);
  const [subjectDetail ,setSubjectDetail] = useState({name: ''});

  useEffect(() => {
    const getPosts = async () => {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/spring-leaf/topic/get-post?topic_id=${params.topicId}`).then(_res => _res.json());
      setPostList(res.post);
    };

    const getSubjectDetail = async () => {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/spring-leaf/subject/get?subject_id=${params.subjectId}`).then(_res => _res.json());
      setSubjectDetail(res.subject);
    };

    getPosts();
    getSubjectDetail();
  }, [params]);

  return (
    <DefaultLayout>
      <PageHeader to={`/?subjects=${params.subjectId}`} title={subjectDetail?.name || ''}  />
      <PostList topicId={params.topicId} postList={postList} />
    </DefaultLayout>
  );
};

export default TopicDetailPage;
