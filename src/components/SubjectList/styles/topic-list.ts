import styled from 'styled-components/macro';

export const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: var(--height-topic-list);
  display: flex;
  align-items: center;
  overflow-x: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Topic = styled.div<{active: boolean}>`
  ${({active}) => active && `
  background-color: rgba(200, 200, 200, 0.3);
  `}
  border-radius: 999px;
  padding: 0 20px;
  margin: 0 5px;
  font-weight: bold;
  font-size: 2rem;
  color: var(--black-color);

  &:hover {
    background-color: rgba(200, 200, 200, 0.3);
    transition: 0.4s;
  }
`;
