import {Wrapper, AvatarFormWrapper, UserDetailFormWrapper} from './styles/update-profile-form';
import UserDetailForm from './UserDetailForm';
import AvatarForm from './AvatarForm';

const UpdateProfileForm = () => {
  return (
    <Wrapper>
      <AvatarFormWrapper>
        <AvatarForm />
      </AvatarFormWrapper>

      <UserDetailFormWrapper>
        <UserDetailForm />
      </UserDetailFormWrapper>
    </Wrapper>
  );
};

export default UpdateProfileForm;
