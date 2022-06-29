import { memo, ReactNode } from 'react';
import { GrClose } from 'react-icons/gr';

import {
  Body,
  CloseIcon,
  Modal as ModalElement,
  Overlay,
} from './styles/modal';

type ModalType = {
  children: ReactNode;
  modal: boolean;
  setModal: (a: boolean) => void;
};

const Modal = ({ children, modal, setModal }: ModalType) => {
  const handleClose = () => {
    setModal(false);
  };

  return (
    <ModalElement modal={modal}>
      <Overlay modal={modal} onClick={handleClose} />
      <Body modal={modal}>
        <CloseIcon onClick={handleClose}>
          <GrClose />
        </CloseIcon>
        {children}
      </Body>
    </ModalElement>
  );
};

export default memo(Modal);
