import { ButtonProps, Props } from '@/components/PropsType';
import { ButtonElement } from './styles/button';

export default function Button({
  children,
  variant = 'white',
  size = 'md',
  full = false,
  rounded = false,
  circle = false,
  ...props
}: Props & ButtonProps) {
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
