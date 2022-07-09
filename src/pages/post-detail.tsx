import _reverse from 'lodash/reverse';
import {DefaultLayout} from '@/layouts';
import {PostDetail} from '@/components';
import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

const PostDetailPage = () => {
  const params = useParams();
  const [postDetail, setPostDetail] = useState({});
  const [commentList, setCommentList] = useState<any[]>([]);
  const [update , setUpdate ] = useState<any>(null);

  useEffect(() => {
    const getPostDetail = async () => {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/spring-leaf/post/get?post_id=${params.postId}`).then(_res => _res.json());
      setPostDetail(res.post);
      setCommentList(_reverse(res.post.comments) || []);
    };

    getPostDetail();
  }, [params.postId, update]);

  return (
    <DefaultLayout>
      <PostDetail setUpdate={setUpdate} setCommentList={setCommentList} commentList={commentList} postDetail={postDetail} />
    </DefaultLayout>
  );
};

export default PostDetailPage;
