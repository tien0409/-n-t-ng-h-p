import {
  AvatarWrapper,
  Wrapper,
  Item,
  InfoWrapper,
  Username,
  Introduce,
  FollowButtonWrapper,
  FollowButton
} from './styles/suggested-users';
import { Image } from '@/components';

const SuggestedUsers = () => {
  return (
    <Wrapper>
      <Item>
        <AvatarWrapper>
          <Image alt="asd" src="sasd" />
        </AvatarWrapper>
        <InfoWrapper>
          <Username>Paul Cantor</Username>
          <Introduce>
            Wrote for the New York Times, New York Magazine, Esquire,
          </Introduce>
        </InfoWrapper>
        <FollowButtonWrapper>
          <FollowButton rounded variant="white" size="sm">
            Follow
          </FollowButton>
        </FollowButtonWrapper>
      </Item>
    </Wrapper>
  );
};

export default SuggestedUsers;
