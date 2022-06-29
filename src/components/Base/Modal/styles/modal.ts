import styled, { css } from 'styled-components/macro';

const styleCommon = css<{ modal: boolean }>`
  ${({ modal }) => {
    if (modal) {
      return `
        opacity: 1;
        visibility: visible;
      `;
    } else {
      return `
        opacity: 0;
        visibility: hidden;
      `;
    }
  }}

  transition: 0.6s ease-in-out opacity;
`;

export const Modal = styled.div<{ modal: boolean }>`
  ${styleCommon};

  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 3;
`;

export const CloseIcon = styled.span`
  position: absolute;
  top: 20px;
  right: 30px;
  cursor: pointer;
`;

export const Overlay = styled.div<{ modal: boolean }>`
  ${styleCommon};

  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 4;
`;

export const Body = styled.div<{ modal: boolean }>`
  ${styleCommon};

  display: inline-block;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 5;
`;
