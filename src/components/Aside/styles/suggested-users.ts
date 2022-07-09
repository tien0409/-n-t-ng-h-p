import styled from 'styled-components/macro';

import { Button } from '@/components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Item = styled.div`
  display: flex;
  gap: 10px;
`;

export const AvatarWrapper = styled.div`
  width: 43px;
  height: 43px;
  border-radius: 50%;
  overflow: hidden;
`;

export const InfoWrapper = styled.div`
  flex: 1;
`;

export const Username = styled.span`
  font-weight: bold;
  color: var(--text-color);
  margin-bottom: 5px;
`;

export const Introduce = styled.p`
  font-size: 1.1rem;
  color: rgba(117, 117, 117, 1);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const FollowButtonWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const FollowButton = styled(Button)`
  width: auto;
  padding: 5px 13px;
  font-size: 1.3rem;
  border: 1px solid var(--text-color);

  &:hover {
    border-color: var(--black-color);
    box-shadow: none;
  }
`;
