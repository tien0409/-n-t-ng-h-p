import styled from 'styled-components/macro';

export const Wrapper = styled.form`
  padding: 10px 15px;
`;

export const InputWrapperCol = styled.div`
  display: flex;
  gap: 12px;
`;

export const InputWrapper = styled.div`
  margin: 13px 0;
  overflow: hidden;
  width: 100%;
`;

export const Label = styled.label`
  font-size: 1.5rem;
  color: #777;
`;

export const Input = styled.input`
  padding: 0 18px;
  height: 45px;
  width: 100%;
  font-size: 1.7rem;
  color: var(--text-color);
  border: 1px solid #ddd;
  border-radius: 7px;
  outline: none;
  transition: 0.1s;

  &:focus {
    border: 2px solid #59b2ff;
  }
`;

export const TextArea = styled.textarea`
  padding: 10px 18px;
  width: 100%;
  font-size: 1.7rem;
  color: var(--text-color);
  border: 1px solid #ddd;
  border-radius: 7px;
  outline: none;
  transition: 0.1s;

  &:focus {
    border: 2px solid #59b2ff;
  }
`;
