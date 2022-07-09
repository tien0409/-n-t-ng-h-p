import { AiOutlineDoubleLeft} from 'react-icons/ai';

import { Wrapper, IconWrapper, Title } from './styles/page-header';

type Props = {
  to: string,
  title: string
}

const PageHeader = ({to, title}: Props)  => {
  return (
    <Wrapper to={to}>
      <IconWrapper>
        <AiOutlineDoubleLeft />
      </IconWrapper>
      <Title>{title}</Title>
    </Wrapper>
  );
};

export default PageHeader;
