import _sortBy from 'lodash/sortBy';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import {useContext, useEffect, useState} from 'react';
import { FiEdit } from 'react-icons/fi';
import { IconType } from 'react-icons';
import {
  IoHomeOutline,
  IoHome,
} from 'react-icons/io5';

import { LogoWrapper, NavItem, NavList, Wrapper, AvatarWrapper, UserOptionsWrapper, UserOptions, OptionLink, Option } from './styles/navigation';
import {AuthContext, Image} from '@/components';
import {HOME,  POST_CREATE} from '@/configs/routes';

type Nav = {
  icon?: IconType;
  outlineIcon: IconType;
  to: string;
  separate?: boolean;
  needAuth?:boolean;
};

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {isAuthen, setIsAuthen, setUserInfo} = useContext(AuthContext);

  const [navList] = useState<Nav[]>(() => [
    { icon: IoHome, outlineIcon: IoHomeOutline, to: HOME },
    // {
    //   icon: IoNotificationsSharp,
    //   outlineIcon: IoNotificationsOutline,
    //   to: HOME,
    // },
    {
      outlineIcon: FiEdit,
      to: POST_CREATE,
      separate: true,
      needAuth: true
    },
  ]);
  const [navActive, setNavActive] = useState<Nav>();
  const [showOptions, setShowOptions] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthen(false);
    setUserInfo(null);
  };

  useEffect(() => {
    const { pathname } = location;
    const navListSorted = _sortBy(navList, (nav) => nav.to.length);
    const navActived = navListSorted.find((nav) => nav.to === pathname);
    setNavActive(navActived);
  }, [location, navList]);

  return (
    <Wrapper>
      <Link to={HOME}>
        <LogoWrapper>
          <Image src="assets/images/logo.png" alt="Logo" />
        </LogoWrapper>
      </Link>

      <NavList>
        {navList.map((nav, index) => (
          nav.needAuth ? (
            isAuthen ? (
              <Link key={index} to={nav.to}>
                <NavItem separate={nav.separate}>
                  {nav.to === navActive?.to && nav.icon ? (
                    <nav.icon size={23} />
                  ) : (
                    <nav.outlineIcon size={23} />
                  )}
                </NavItem>
              </Link>
            ): null
          ): (
            <Link key={index} to={nav.to}>
              <NavItem separate={nav.separate}>
                {nav.to === navActive?.to && nav.icon ? (
                  <nav.icon size={23} />
                ) : (
                  <nav.outlineIcon size={23} />
                )}
              </NavItem>
            </Link>
          )
        ))}
      </NavList>
      {isAuthen && (
        <UserOptionsWrapper>
          <AvatarWrapper  onClick={( ) =>  setShowOptions(!showOptions)}>
            <Image src="abc" alt="Logo" />
          </AvatarWrapper>

          <UserOptions showOptions={showOptions}>
            <OptionLink onClick={handleLogout} >
              <Option >Sign out</Option>
            </OptionLink>
            <OptionLink onClick={() => navigate('/profile')}>
              <Option>Profile</Option>
            </OptionLink>
          </UserOptions>
        </UserOptionsWrapper>

      )}
    </Wrapper>
  );
};

export default Navigation;
