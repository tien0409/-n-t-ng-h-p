import { ReactNode } from 'react';

export type Props = {
  children?: ReactNode;
  [props: string]: unknown;
};

export type ImageProps = {
  src: string;
  alt: string;
};

export type LinkProps = Props & {
  to: string;
};

export type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'white' | 'black';
  size?: 'sm' | 'md' | 'lg';
  full?: boolean;
  rounded?: boolean;
  circle?: boolean;
};

