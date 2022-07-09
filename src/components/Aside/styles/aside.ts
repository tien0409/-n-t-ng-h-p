import styled from 'styled-components/macro';
import { BiSearch } from 'react-icons/bi';

export const Wrapper = styled.aside`
  width: 100%;
`;

export const SpaceSeparate = styled.span<{ height: number }>`
  display: inline-block;
  height: ${({ height }) => height}px;
`;

export const SearchWrapper = styled.div`
  position: relative;
  display: flex;
  height: 42px;
  border: 1px solid rgba(230, 230, 230, 1);
  border-radius: 50px;
`;

export const SearchIcon = styled(BiSearch)`
  height: 100%;
  margin: 0 7px 0 15px; `;

export const DropdownWrapper = styled.div`
  background-color: var(--white-color);
  position: absolute;
  top: calc(100% + 10px);
  left: 0;
  right: 0;
  box-shadow: 0 0 2px rgba(0,0,0,0.4);
  padding: 6px 0;
 `;

export const Input = styled.input`
  flex: 1;
  width: 100%;
  height: 100%;
  padding-right: 15px;
  font-size: 1.4rem;
  outline: none;
  border: none;

  &:focus::placeholder  ${DropdownWrapper} {
    display: none;
  }
`;

export const SectionTitle = styled.h3`
  font-size: 1.7rem;
  margin-bottom: 12px;
`;


export const TopicItem = styled.div`
  color: var(--text-color);
  padding: 4px 8px;

  &:hover {
    background-color: #eee;
  }
`;
