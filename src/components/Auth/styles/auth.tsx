import styled from 'styled-components/macro';
import { Link as LinkRouter } from 'react-router-dom';

export const Wrapper = styled.div`
  width: 500px;
  padding: 40px 70px;
  background-color: var(--white-color);
  border-radius: 10px;
`;

export const Title = styled.h3`
  margin-bottom: 20px;
  color: var(--text-color);
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
`;

export const Form = styled.form``;

export const InputWrapper = styled.div`
  margin: 20px 0;
  height: 50px;
  overflow: hidden;
`;

export const Input = styled.input`
  padding: 0 15px;
  height: 100%;
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

export const PasswordOptions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--text-color);
  margin-bottom: 10px;

  ${Input} {
    width: auto;
    height: auto;
  }
`;

export const CheckboxWrapper = styled.div``;

export const Label = styled.label`
  margin-left: 7px;
`;

export const Text = styled.p`
  color: var(--text-color);
  font-size: 1.4rem;
`;

export const ForgotText = styled(Text)``;

export const ToggleText = styled(Text)`
  text-align: center;
  margin-top: 12px;
`;

export const Link = styled(LinkRouter)`
  text-decoration: none;
`;

export const TextToggleAuth = styled.span`
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
