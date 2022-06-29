import { Link as NativeLink } from 'react-router-dom';
import styled from 'styled-components/macro';

import { Button, Image } from '@/components';

export const Header = styled.header<{ border: boolean }>`
  display: flex;
  align-items: center;
  width: 100%;
  height: var(--header-height);
  background: var(--white-color);
  border-bottom: ${({border}) => border ? '0.5px solid #888': 'none'} ;
`;

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoWrapper = styled(NativeLink)`
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

export const NavLink = styled(NativeLink)`
  text-decoration: none;
`;

export const NavItem = styled.li`
  color: var(--text-color);
  cursor: pointer;
`;

export const NavButton = styled(Button)`
display: flex;
`;

export const UserWrapper = styled.div`
  position: relative;
`;

export const AvatarWrapper = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
`;

export const UserOptions = styled.div<{showOptions: boolean}>`
  position: absolute;
  top: calc(100% + 10px);
  right: -10px;
  width: 200px;
  text-align: right;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.4);
  background-color: var(--white-color);
  transition: 0.2s max-height;
  overflow: hidden;

  ${({showOptions}) => {
    return !showOptions ? `
      padding: 0 0;
      max-height: 0;
    `:
      `
      padding: 5px 0;
      max-height: 300px;
    `;
  }};
`;

export const Link = styled(NativeLink)`
  display: block;
  padding: 4px 13px;
  transition: 0.6s;

  &:hover {
    background-color: #eee;
  }
`;

export const Option = styled.div`
  color: var(--text-color);
`;
