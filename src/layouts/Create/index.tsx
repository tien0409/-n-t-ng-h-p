import {ReactNode} from 'react';

import {Wrapper} from './styles/create';
import Header from '@/layouts/Root/Header';
import {ToastContainer} from 'react-toastify';

type Props = {
  children?: ReactNode;
};

const CreateLayout = ({children}: Props) => {
  return (
    <Wrapper className='container'>
      <ToastContainer />
      <Header border={false} />
      {children}
    </Wrapper>
  );
};

export default CreateLayout;
