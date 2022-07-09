import { ReactNode } from 'react';
import {ToastContainer} from 'react-toastify';

import {
  Wrapper,
  Main,
  NavigationWrapper,
  AsideWrapper,
  MainContent,
} from './styles/default';
import { Navigation, Aside } from '@/components';

type Props = {
  NavigationComp?: () => JSX.Element;
  RelatedComp?: () => JSX.Element;
  children: ReactNode;
};

const DefaultLayout = ({
  NavigationComp = Navigation,
  RelatedComp = Aside,
  children,
}: Props) => {
  return (
    <Wrapper className="container">

      <ToastContainer />
      <NavigationWrapper>
        <NavigationComp />
      </NavigationWrapper>

      <Main>
        <MainContent>{children}</MainContent>
      </Main>

      <AsideWrapper>
        <RelatedComp />
      </AsideWrapper>
    </Wrapper>
  );
};

export default DefaultLayout;
