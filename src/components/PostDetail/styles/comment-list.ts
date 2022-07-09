import styled from 'styled-components/macro';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`;

export const CommnetItem = styled.div`
  margin-bottom: 20px;
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
  width: 30px;
  height: 30px;
  border-radius: 50%;
  overflow: hidden;
`;

export const Username = styled.span`
  margin-left: 5px;
  font-size: 1.3rem;
`;

export const CreatedAt = styled.span`
  color: #888;
  font-size: 1.2rem;
`;

export const Content = styled.p`
  margin-top: 5px;
  font-size: 1.4rem;
  color: var(--text-color);
`;
