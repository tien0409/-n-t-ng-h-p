import {ReactElement} from 'react';

import {HomePage, PostCreatePage, PostDetailPage, ProfilePage, TopicDetailPage} from '@/pages';

export type ROUTE = {
  path: string;
  element: () => ReactElement;
  needAuth?: boolean;
};

export const HOME = '/';
export const POST_CREATE = '/posts/create';
export const POST_DETAIL = '/topics/:topicId/posts/:postId';
export const TOPIC_DETAIL = '/subjects/:subjectId/topics/:topicId';
export const PROFILE = '/profile';

export const PRIVATE_ROUTES = [{path: PROFILE, element: ProfilePage}, {path: POST_CREATE, element: PostCreatePage}];

export const PUBLIC_ROUTES = [{path: HOME, element: HomePage}, {
  path: TOPIC_DETAIL,
  element: TopicDetailPage
}, {path: POST_DETAIL, element: PostDetailPage}];
