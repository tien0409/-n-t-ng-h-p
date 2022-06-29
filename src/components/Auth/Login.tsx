import { Button } from '@/components';
import { ModalType } from '@/layouts/Default/Header';
import {
  Form,
  Input,
  InputWrapper,
  ForgotText,
  Title,
  Link,
  Wrapper,
  ToggleText,
  PasswordOptions,
  CheckboxWrapper,
  Label,
  TextToggleAuth,
} from './styles/auth';

type Props = {
  setModalType: (modalType: ModalType) => void;
};

const Login = ({ setModalType }: Props) => {
  return (
    <Wrapper>
      <Title>Sign In</Title>
      <Form>
        <InputWrapper>
          <Input spellCheck={false} placeholder="Username or Email" />
        </InputWrapper>
        <InputWrapper>
          <Input type="password" placeholder="Password" />
        </InputWrapper>
        <PasswordOptions>
          <CheckboxWrapper>
            <Input type="checkbox" id="remember_me" />
            <Label htmlFor="remember_me">Remember password</Label>
          </CheckboxWrapper>
          <Link to="/">
            <ForgotText>Forgot password ?</ForgotText>
          </Link>
        </PasswordOptions>
        <Button type="submit" variant="primary" full>
          Login
        </Button>
        <ToggleText>
          Don&apos;t have an account?{' '}
          <TextToggleAuth onClick={() => setModalType('SIGN_UP')}>
            Sign Up
          </TextToggleAuth>
        </ToggleText>
      </Form>
    </Wrapper>
  );
};

export default Login;
