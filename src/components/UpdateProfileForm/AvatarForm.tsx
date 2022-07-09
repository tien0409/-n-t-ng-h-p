import {Wrapper, AvatarWrapper, Overlay} from './styles/avatar-form';
import {AuthContext, Image} from '@/components';
import {useContext, useRef} from 'react';
import {toast} from 'react-toastify';

const AvatarForm = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const {userInfo} = useContext(AuthContext);

  const handleClick = () => {
    if(inputRef.current) {
      inputRef.current?.click();
    }
  };

  const handleChangeAvatar = async (e: any) => {
    const data = new FormData();
    data.append('file', e.target.files[0]);
    // data.append('first_name', userInfo?.firstName || '');
    // data.append('last_name', userInfo?.lastName || '');
    // data.append('email', userInfo?.email || '');
    // data.append('bio', userInfo?.biography || '');
    data.append('upload_preset', 'php_mvc');

    const res1 = await  fetch(  'https://api.cloudinary.com/v1_1/dspnu5m0h/upload', {
      method: 'POST', body: data
    }).then(_res => _res.json());

  };

  return (
    <Wrapper>
      <AvatarWrapper>
        <Image src={'asdasd'} alt={'asdasd'} />
        <input ref={inputRef} onChange={handleChangeAvatar} type="file" hidden/>
        <Overlay onClick={handleClick}>
          Changes avatar
        </Overlay>
      </AvatarWrapper>
    </Wrapper>
  );
};

export default AvatarForm;
