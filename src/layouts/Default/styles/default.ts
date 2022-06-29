import styled from 'styled-components/macro';

const NAV_WRAPPER_WIDTH = '120px';
const ASIDE_WRAPPER_WIDTH = '350px';
const PADDING_SECTION = '40px 25px';

export const Wrapper = styled.div`
  display: flex;
  position: relative;
`;

export const NavigationWrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  width: ${NAV_WRAPPER_WIDTH};
  padding: ${PADDING_SECTION};
`;

export const Main = styled.main`
  flex: 1;
  padding: ${PADDING_SECTION};
  margin-left: ${NAV_WRAPPER_WIDTH};
  margin-right: ${ASIDE_WRAPPER_WIDTH};
`;

export const MainContent = styled.div`
  overflow: hidden;
  position: relative;
  width: 90%;
  margin: 0 auto;
`;

export const AsideWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  height: 100vh;
  width: ${ASIDE_WRAPPER_WIDTH};
  padding: ${PADDING_SECTION};
  border-left: 1px solid #ddd;
`;
