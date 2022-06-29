import { ReactNode } from 'react';

import { ButtonElement } from './styles/button';

type Props = {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'white' | 'black';
  size?: 'sm' | 'md' | 'lg';
  full?: boolean;
  rounded?: boolean;
  circle?: boolean;
  [key: string]: unknown;
};

export default function Button({
  children,
  variant = 'white',
  size = 'md',
  full = false,
  rounded = false,
  circle = false,
  ...props
}: Props) {
  return (
    <ButtonElement
      variant={variant}
      size={size}
      full={full}
      rounded={rounded}
      circle={circle}
      {...props}
    >
      {children}
    </ButtonElement>
  );
}
