import {useLocation} from 'react-router-dom';
import {FormEvent, useState} from 'react';
import { ToastContainer, toast } from 'react-toastify';

import {
  Form,
  Input,
  InputWrapper,
  TextToggleAuth,
  Title,
  ToggleText,
  Wrapper,
} from './styles/auth';
import {Button} from '@/components';
import {ModalType} from '@/layouts/Root/Header';
import {HOME} from '@/configs/routes';

type Props = {
  setModalType: (modalType: ModalType) => void;
};

const Register = ({setModalType}: Props) => {
  const location = useLocation();

  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const res = await fetch(`${process.env.REACT_APP_API_URL}/spring-leaf/user/register`, {
      method: 'post',
      body: JSON.stringify({
        email,
        first_name: firstName,
        last_name: lastName,
        username,
        password,
      })
    }).then(_res => _res.json());

    if(res.error !== 0) {
      toast.error('Something wrong. Please try again.');
    } else {
      toast.success('Register success.');
      setModalType('SIGN_IN');
    }
  };

  return (
    <Wrapper>
      <Title>Sign Up</Title>
      <Form onSubmit={handleSubmit}>
        <InputWrapper>
          <Input spellCheck={false} placeholder="Email" value={email}
            onChange={(e: FormEvent<HTMLInputElement>) => setEmail(e.currentTarget.value)}/>
        </InputWrapper>
        <InputWrapper>
          <Input placeholder="Username" value={username}
            onChange={(e: FormEvent<HTMLInputElement>) => setUsername(e.currentTarget.value)}/>
        </InputWrapper>
        <InputWrapper>
          <Input placeholder="First name" value={firstName}
            onChange={(e: FormEvent<HTMLInputElement>) => setFirstName(e.currentTarget.value)}/>
        </InputWrapper>
        <InputWrapper>
          <Input placeholder="Last name" value={lastName}
            onChange={(e: FormEvent<HTMLInputElement>) => setLastName(e.currentTarget.value)}/>
        </InputWrapper>
        <InputWrapper>
          <Input type="password" placeholder="Password" value={password}
            onChange={(e: FormEvent<HTMLInputElement>) => setPassword(e.currentTarget.value)}/>
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
