import { ReactNode } from 'react';
import {ToastContainer} from 'react-toastify';

import Header from './Header';

type Props = {
  children?: ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <>
      <ToastContainer />
      <Header />
      {children}
    </>
  );
}
