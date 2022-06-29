import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';

import { Button, Image } from '@/components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  height: var(--header-height);
  background: var(--white-color);
  border-bottom: 0.5px solid #888;
`;

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoWrapper = styled(Link)`
  width: 40px;
  height: 40px;
`;

export const Logo = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 25px;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
`;

export const NavItem = styled.li`
  color: var(--text-color);
  cursor: pointer;
`;

export const NavButton = styled(Button)`
display: flex;
`;
