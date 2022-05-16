import { useState } from 'react';
import { ImageNative } from './styles/image';

interface Props {
  src: string;
  alt?: string;
  imagePlaceholder?: string;
}

const _imagePlaceholder = 'https://via.placeholder.com/150';

const Image = ({ src, alt, imagePlaceholder }: Props) => {
  const [_src, set_Src] = useState(src);
  const _alt = alt || '';

  const handleError = () => {
    set_Src(() => imagePlaceholder || _imagePlaceholder);
  };

  return <ImageNative src={_src} alt={_alt} onError={handleError} />;
};

export default Image;
