import styled from 'styled-components/macro';
import {Link} from 'react-router-dom';

export const Wrapper = styled(Link)`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: var(--text-color);
`;

export const IconWrapper = styled.div`
  margin-right: 7px;
  display: flex;
  font-size: 2.3rem;
`;

export const Title = styled.span`
  font-weight: bolder;
  font-size: 2.3rem;
`;
