import {useContext, useState} from 'react';

import {
  Header as HeaderElement,
  Logo,
  LogoWrapper,
  Navbar,
  NavButton,
  NavItem,
  NavLink,
  NavList,
  UserWrapper,
  AvatarWrapper,
  UserOptions,
  Option,
  Link
} from './styles/header';
import {AuthContext, Image, Login, Modal, Register} from '@/components';
import { HOME } from '@/configs/routes';

export type ModalType = 'SIGN_IN' | 'SIGN_UP';

type Props = {
  border?: boolean;
}

export default function Header({border = true} :Props) {
  const {isAuthen} = useContext(AuthContext);

  const [modal, setModal] = useState(false);
  const [modalType, setModalType] = useState<ModalType>();
  const [showOptions, setShowOptions] = useState(false);

  const handleOpenModal = (type: ModalType) => {
    setModalType(type);
    setModal(true);
  };

  return (
    <HeaderElement border={border}>
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
          <Logo src="/src/asssets/images/logo.png" alt="logo" />
        </LogoWrapper>
        <NavList>
          {!isAuthen ? (
            <>
              {/*<NavLink to="/">*/}
              {/*  <NavItem>Our story</NavItem>*/}
              {/*</NavLink>*/}
              {/*<NavLink to="/">*/}
              {/*  <NavItem>Membership</NavItem>*/}
              {/*</NavLink>*/}
              {/*<NavLink to="/">*/}
              {/*  <NavItem>Write</NavItem>*/}
              {/*</NavLink>*/}
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
            </>
          ): (
            <UserWrapper >
              <AvatarWrapper onClick={() => setShowOptions(!showOptions)}>
                <Image src="asdasd" alt="asdadsd" />
              </AvatarWrapper>
              <UserOptions showOptions={showOptions}>
                <Link to='/'>
                  <Option>Logout</Option>
                </Link>
                <Link to='/'>
                  <Option>Logout</Option>
                </Link>
                <Link to='/'>
                  <Option>Logout</Option>
                </Link>
                <Link to='/'>
                  <Option>Logout</Option>
                </Link>
                <Link to='/'>
                  <Option>Logout</Option>
                </Link>
              </UserOptions>
            </UserWrapper>
          )}
        </NavList>
      </Navbar>
    </HeaderElement>
  );
}
