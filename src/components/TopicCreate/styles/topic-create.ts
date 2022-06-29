import styled from 'styled-components/macro';

export const Wrapper = styled.div`
  margin: 0 auto;
`;

export const Title = styled.h1 `
  font-size: 3rem;
  font-weight: bold;
`;

export const Form = styled.form`
  margin-top: 30px;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

export const Label = styled.label`
  font-weight: bold;
  font-size: 1.6rem;
`;

export const SubLabel = styled.span`
  font-size: 1.2rem;
  font-weight: lighter;
`;

export const Input = styled.input`
  margin-top: 5px;
  height: 32px;
  font-size: 1.6rem;
  padding: 0 10px;
  outline-color: rgba(0, 0, 255, 0.2);
  border-color: rgba(0, 0, 255, 0.08);
`;

export const ButtonWrapper = styled.div`
  margin-top: 20px;
  text-align: right;
`;
