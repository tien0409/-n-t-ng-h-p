import styled from 'styled-components/macro';
import {Link as NativeLink} from 'react-router-dom';

export const Wrapper = styled.div`
  padding-top: calc(2 * var(--height-topic-list));
`;

export const ItemWrapper = styled.div`
  margin-top: 20px;
`;

export const Link = styled(NativeLink)`
  text-decoration: none;
  color: var(--text-color);
`;

export const Item = styled.article``;

export const CreatorWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  align-items: center;
  margin-top: 5px;
`;

export const MainContent = styled.div`
  flex: 1;
`;

export const Session = styled.h3`
  display: inline-block;
  font-size: 2rem;
  font-weight: bold;
  color: var(--black-color);
`;

export const Title = styled.span`
  display: inline-block;
  margin-left: 6px;
  font-size: 1.8rem;
`;

export const Content = styled.p`
  font-size: 1.4rem;
  line-height: 2.2rem;
  color: var(--text-color);
`;

export const TopicList = styled.span``;
export const TopicItem = styled.span``;

export const ActionList = styled.div``;

export const ActionItem = styled.span``;
