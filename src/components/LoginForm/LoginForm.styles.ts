import styled from 'styled-components';

export const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  input {
    width: 400px;
    height: 40px;
    border-radius: 8px;
    border: ${(props) => `1px solid ${props.theme.color}`};
    outline: none;
    background-color: transparent;
    padding-left: 1em;
    color: ${(props) => props.theme.color};
  }

  @media (max-width: 425px) {
    input {
      width: 320px;
    }
  }
`;

export const CheckboxInput = styled.div`
  display: flex;
  align-items: center;
  input {
    height: 20px;
    width: 20px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1em;
  h3 {
    margin: 0;
    font-size: 24px;
  }
  button {
    font-weight: bold;
    height: 40px;
    width: 400px;
    border-radius: 8px;
    border: none;
    outline: none;
    color: ${(props) => props.theme.bg};
    font-size: 18px;
    background-color: ${(props) => props.theme.color};
    cursor: pointer;
  }
  @media (max-width: 425px) {
    button {
      width: 325px;
    }
  }
`;

export const Error = styled.div`
  width: fit-content;
  border-radius: 8px;
  color: white;
  background-color: #e53e3e;
  padding: 0.25em 0.5em;
`;
