import styled from 'styled-components/macro';

export const Wrapper = styled.div`
  padding: 35px 0;
`;

export const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50%;
  text-align: center;
  padding-top: 15px;
  transition: 0.5s;
  opacity: 0;
  cursor: pointer;
`;

export const AvatarWrapper = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
  position: relative;

  &:hover ${Overlay} {
    opacity: 1;
  }
`;
