import styled from 'styled-components';
import { StyledProps } from '../../types';

export const Container = styled.div`
  width: fit-content;
  height: fit-content;
  place-self: center;
  margin: 3em auto;
  display: flex;
  gap: 0.25em;

  button {
    width: 24px;
    height: 24px;
    border-radius: 8px;
    border: none;
    color: ${(props: StyledProps) => props.theme.bg};
    background-color: ${(props: StyledProps) => props.theme.color};
    cursor: pointer;
    font-weight: bold;
  }
`;
