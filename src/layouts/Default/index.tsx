import { ReactNode } from 'react';
import Header from './Header';

type Props = {
  children?: ReactNode;
};

export default function DefaultLayout({ children }: Props) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
