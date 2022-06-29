import styled from 'styled-components/macro';

export const Wrapper = styled.div`
  display: flex;
  gap: 30px;
  width: 90%;
  margin: 0 auto;
  margin-top: 30px;
`;

export const SubWrapper = styled.div`
  box-shadow: 0 0.15rem 1.75rem 0 rgb(33 40 50 / 15%);
  border-radius: 8px;
`;

export const AvatarFormWrapper = styled(SubWrapper)`
  flex-basis: 30%;
  height: fit-content;
  display: flex;
  justify-content: center;
`;

export const UserDetailFormWrapper = styled(SubWrapper)`
  flex-basis: 70%
`;

