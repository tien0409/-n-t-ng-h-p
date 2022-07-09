import styled from 'styled-components/macro';
import {Link as NativeLink} from 'react-router-dom';

export const Wrapper = styled.div`
  padding-top: calc(2 * var(--height-topic-list));
`;

export const Link = styled(NativeLink)`
  text-decoration: none;
  color: var(--text-color);
`;

export const Item = styled.article``;

export const CreatorWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.4rem;
`;

export const AvatarWrapper = styled.div`
  width: 27px;
  height: 27px;
  border-radius: 50%;
  overflow: hidden;
`;

export const Username = styled.span`
  margin-left: 7px;
`;

export const CreateDate = styled.span`
  color: #999;
`;

export const MainContentWrapper = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 10px;
`;

export const MainContent = styled.div`
  flex: 1;
`;

export const PostImageWrapper = styled.div`
  width: 112px;
  height: 112px;
`;

export const Title = styled.h3`
  font-size: 2rem;
  font-weight: bold;
  color: var(--black-color);
`;

export const Content = styled.p`
  font-size: 1.4rem;
  line-height: 2.2rem;
  color: var(--text-color);
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* number of lines to show */
  line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const TopicList = styled.span``;
export const TopicItem = styled.span``;

export const ActionList = styled.div``;

export const ActionItem = styled.span``;
