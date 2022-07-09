import styled from 'styled-components/macro';
import { Link as NativeLink } from 'react-router-dom';

export const Wrapper = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  border-right: 1px solid #ddd;
`;

export const Link = styled(NativeLink)`
  text-underline: none;
`;

export const LogoWrapper = styled.div`
  width: 50px;
  height: 50px;
`;

export const UserOptionsWrapper = styled.div`
  position: relative;
`;

export const AvatarWrapper = styled(LogoWrapper)`
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
`;

export const UserOptions = styled.div<{showOptions: boolean}>`
  position: absolute;
  bottom: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%);
  width: 200px;
  text-align: left;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.4);
  background-color: var(--white-color);
  transition: 0.2s max-height;
  will-change: max-height;
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

export const OptionLink = styled.div`
  display: block;
  padding: 4px 13px;
  transition: 0.6s;
  cursor: pointer;

  &:hover {
    background-color: #eee;
  }
`;

export const Option = styled.div`
  color: var(--text-color);
`;

export const NavList = styled.ul`
  list-style: none;
`;

export const NavItem = styled.li<{ separate?: boolean }>`
  margin-top: ${({ separate }) => (separate ? '40px' : '20px')};
  color: var(--text-color);
  cursor: pointer;
`;
