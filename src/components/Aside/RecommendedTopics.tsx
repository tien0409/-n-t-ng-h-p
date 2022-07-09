import { Link } from 'react-router-dom';
import { memo } from 'react';

import { Wrapper, Item } from './styles/recommended-topics';
import { HOME } from '@/configs/routes';

type Props = {
  recommendedTopics: string[];
};

const RecommendedTopics = ({ recommendedTopics }: Props) => {
  return (
    <Wrapper>
      {recommendedTopics.map((item) => (
        <Link to={HOME} key={item}>
          <Item>{item}</Item>
        </Link>
      ))}
    </Wrapper>
  );
};

export default memo(RecommendedTopics);
