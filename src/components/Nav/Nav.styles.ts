import styled from 'styled-components';
import { StyledProps } from '../../types';

export const Container = styled.div`
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    height: 28px;
    color: ${(props: StyledProps) => props.theme.bg};
    background-color: ${(props: StyledProps) => props.theme.color};
    border: 0;
    border-radius: 8px;
    font-weight: bold;
    padding: 0 0.6em;
    cursor: pointer;
  }
`;
