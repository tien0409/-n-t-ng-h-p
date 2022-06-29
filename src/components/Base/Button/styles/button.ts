import styled from 'styled-components/macro';

export const ButtonElement = styled.button<{
  variant?: 'primary' | 'secondary' | 'white' | 'black';
  size?: 'sm' | 'md' | 'lg';
  rounded?: boolean;
  full?: boolean;
  circle?: boolean;
}>`
  ${({ variant }) => {
    switch (variant) {
      case 'primary':
        return `
          background-color: var(--main-color);
          color: var(--white-color);
        `;
      case 'black':
        return `
          background-color: var(--black-color);
          color: var(--white-color);
        `;
      default:
        return `
          background-color: var(--white-color);
          color: var(--text-color);
        `;
    }
  }};

  border-radius: ${({ rounded, circle }) =>
    rounded ? '9999px' : circle ? '50%' : '4px'};

    width: ${({ full }) => (full ? '100%' : 'fit-content')};

  padding: ${({ size }) => {
    switch (size) {
      case 'md':
        return '12px 20px';
      case 'lg':
        return '16px 32px';
      default:
        return '8px 20px';
    }
  }};

  display: inline-block;
  font-size: 1.6rem;
  font-weight:  500;
  cursor: pointer;
  border: none;
  outline: none;
  transition: 0.4s all;

  &:hover {
    box-shadow: inset 0 0 0 120px rgb(0 0 0 / 18%);
  }
`;
