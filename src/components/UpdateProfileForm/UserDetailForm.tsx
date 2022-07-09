import { Wrapper, InputWrapperCol, InputWrapper, Label, Input, TextArea } from './styles/user-detail-form';
import {AuthContext, Button} from '@/components';
import {FormEvent, useContext, useState} from 'react';
import {toast} from 'react-toastify';

const UserDetailForm = () => {
  const {userInfo, setUserInfo} = useContext(AuthContext);

  const [username, setUsername] = useState(userInfo);
  const [firstName, setFirstName] = useState(userInfo?.firstName || '');
  const [lastName, setLastName] = useState(userInfo?.lastName || '');
  const [email, setEmail] = useState(userInfo?.email || '');
  const [biography, setBiography] = useState(userInfo?.biography);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const res = await fetch(`${process.env.REACT_APP_API_URL}/spring-leaf/user/change-info`, {
      method: 'post',
      body: JSON.stringify({
        first_name: firstName,
        last_name: lastName,
        email,
        bio: biography
      }),
      headers: {
        auth: userInfo?.token || ''
      }
    }).then(_res => _res.json());

    if (res.error === 0) {
      toast.success('Update profile success');
      setUserInfo({
        ...userInfo,
        email,
        firstName,
        lastName,
        biography,
      });
    } else {
      toast.error('Update failed. Please try again');
      localStorage.setItem('token', res.access_token);
    }
  };

  return (
    <Wrapper onSubmit={handleSubmit}>
      <InputWrapper>
        <Label htmlFor="username">Username (how your name will appear to other users on the site)</Label>
        <Input id="username" placeholder="Enter your username" value={'username'} />
      </InputWrapper>

      <InputWrapperCol>
        <InputWrapper>
          <Label htmlFor="firstName">First name</Label>
          <Input id="firstName" placeholder="Enter your first name" value={firstName} onChange={e => setFirstName(e.currentTarget.value)} />
        </InputWrapper>
        <InputWrapper>
          <Label htmlFor="lastName">Last name</Label>
          <Input id="lastName" placeholder="Enter your last name" value={lastName} onChange={e => setLastName(e.currentTarget.value)} />
        </InputWrapper>
      </InputWrapperCol>

      <InputWrapper>
        <Label htmlFor="email">Email address</Label>
        <Input type="email" id="email" placeholder="Enter your email address" value={email} onChange={e => setEmail(e.currentTarget.value)} />
      </InputWrapper>

      <InputWrapper>
        <Label htmlFor="biography">Biography</Label>
        <TextArea id="biography" placeholder="Enter your biography" rows={7} value={biography} onChange={e => setBiography(e.currentTarget.value)} />
      </InputWrapper>

      <Button type={'submit'} variant="primary">Save Changes</Button>
    </Wrapper>
  );
};

export default UserDetailForm;
