import { Button } from '@/components';
import { ModalType } from '@/layouts/Default/Header';
import {
  Form,
  Input,
  InputWrapper,
  TextToggleAuth,
  Title,
  ToggleText,
  Wrapper,
} from './styles/auth';

type Props = {
  setModalType: (modalType: ModalType) => void;
};

const Register = ({ setModalType }: Props) => {
  return (
    <Wrapper>
      <Title>Sign Up</Title>
      <Form>
        <InputWrapper>
          <Input spellCheck={false} placeholder="Username or Email" />
        </InputWrapper>
        <InputWrapper>
          <Input type="password" placeholder="Password" />
        </InputWrapper>
        <InputWrapper>
          <Input type="password" placeholder="Confirm Password" />
        </InputWrapper>
        <Button type="submit" variant="primary" full>
          Sign Up
        </Button>
        <ToggleText>
          You have an account?{' '}
          <TextToggleAuth onClick={() => setModalType('SIGN_IN')}>
            Sign In
          </TextToggleAuth>
        </ToggleText>
      </Form>
    </Wrapper>
  );
};

export default Register;
