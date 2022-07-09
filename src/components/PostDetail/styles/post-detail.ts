import styled from 'styled-components/macro';

export const Wrapper = styled.div`
`;

export const CreatorWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const UserWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const AvatarWrapper = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  overflow: hidden;
`;
export const Username = styled.span`
  margin-left: 10px;
  font-weight: 500;
`;

export const CreatedAt = styled(Username)`
  font-weight: lighter;
  font-size: 1.2rem;
  display: contents;
  color: #888;
`;

export const MainContentWrapper = styled.div`
  margin-top: 20px;
`;

export const Title = styled.h3`
  font-weight: bold;
  font-size: 2.5rem;
`;

export const Content = styled.p`
  margin-top: 15px;
  color: var(--text-color);
`;

export const ActionList = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const ActionItem = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
`;

export const ActionText = styled.span`
  height: 1.6rem;
  font-size: 1.2rem;
`;

export const DrawerWrapper = styled.div`
  margin: 30px 20px;
`;
