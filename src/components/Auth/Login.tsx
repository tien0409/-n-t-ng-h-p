import {FormEvent, useContext, useState} from 'react';

import {Button} from '@/components';
import {AuthContext} from '@/components';
import {ModalType} from '@/layouts/Root/Header';
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
import {toast} from 'react-toastify';
import {HOME} from '@/configs/routes';

type Props = {
  setModalType: (modalType: ModalType) => void;
};

const Login = ({setModalType}: Props) => {
  const {setIsAuthen} = useContext(AuthContext);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const res = await fetch(`${process.env.REACT_APP_API_URL}/spring-leaf/login`, {
      method: 'post',
      body: JSON.stringify({
        username,
        password,
        remember_me: rememberMe,
        auth_type: 'PAP'
      })
    }).then(_res => _res.json());

    if (res.error !== 0) {
      toast.error('Something wrong. Please try again.');
    } else {
      toast.success('Login success.');
      setIsAuthen(true);
      localStorage.setItem('token', res.access_token);
    }
  };

  return (
    <Wrapper>
      <Title>Sign In</Title>
      <Form onSubmit={handleSubmit}>
        <InputWrapper>
          <Input spellCheck={false}
            placeholder="Username"
            name="username"
            value={username}
            onChange={(e: FormEvent<HTMLInputElement>) => setUsername(e.currentTarget.value)}
          />
        </InputWrapper>
        <InputWrapper>
          <Input type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={(e: FormEvent<HTMLInputElement>) => setPassword(e.currentTarget.value)}
          />
        </InputWrapper>
        <PasswordOptions>
          <CheckboxWrapper>
            <Input type="checkbox" id="remember_me"
              checked={rememberMe}
              onChange={(e: FormEvent<HTMLInputElement>) => setRememberMe(e.currentTarget.checked)}/>
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
