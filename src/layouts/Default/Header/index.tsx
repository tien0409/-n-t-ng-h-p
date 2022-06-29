import { Login, Modal, Register } from '@/components';
import { HOME } from '@/configs/routes';
import { useState } from 'react';
import {
  Header as HeaderElement,
  Logo,
  LogoWrapper,
  Navbar,
  NavButton,
  NavItem,
  NavLink,
  NavList,
} from './styles/header';

export type ModalType = 'SIGN_IN' | 'SIGN_UP';

export default function Header() {
  const [modal, setModal] = useState(false);
  const [modalType, setModalType] = useState<ModalType>();

  const handleOpenModal = (type: ModalType) => {
    setModalType(type);
    setModal(true);
  };

  return (
    <HeaderElement>
      <Modal modal={modal} setModal={setModal}>
        {modal &&
          (modalType === 'SIGN_IN' ? (
            <Login setModalType={setModalType} />
          ) : (
            <Register setModalType={setModalType} />
          ))}
      </Modal>

      <Navbar className="container">
        <LogoWrapper to={HOME}>
          <Logo src="logo" alt="logo" />
        </LogoWrapper>
        <NavList>
          <NavLink to="/">
            <NavItem>Our story</NavItem>
          </NavLink>
          <NavLink to="/">
            <NavItem>Membership</NavItem>
          </NavLink>
          <NavLink to="/">
            <NavItem>Write</NavItem>
          </NavLink>
          <NavItem onClick={() => handleOpenModal('SIGN_IN')}>Sign In</NavItem>
          <NavItem>
            <NavButton
              rounded
              variant="primary"
              onClick={() => handleOpenModal('SIGN_UP')}
            >
              Get started
            </NavButton>
          </NavItem>
        </NavList>
      </Navbar>
    </HeaderElement>
  );
}
