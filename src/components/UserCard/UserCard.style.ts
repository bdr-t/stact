import styled from 'styled-components';
import { StyledProps } from '../../types';

export const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 200px;
  width: 300px;
  border-radius: 8px;
  border-width: 1px;
  border-style: solid;
  text-align: center;
  border-color: ${(props: StyledProps) => props.theme.color};
  img {
    border-radius: 9999px;
    width: 80px;
    height: 80px;
    margin-top: -40px;
    margin-left: 110px;
  }

  h4 {
    margin: 0;
    padding: 0;
    font-weight: 600;
    font-size: 1.25em;
    margin-top: 0.5em;
    line-height: 19.36px;
  }

  p {
    margin: 0;
    padding: 0;
    font-weight: 400;
    font-size: 1em;
    margin-top: 0.5em;
    line-height: 14.52px;
  }
`;

interface Props {
  gradient: string;
}

export const Gradient = styled.div<Props>`
  width: 270px;
  height: 80px;
  margin: auto;
  background: ${(props) => props.gradient};
  border-radius: 8px;
  margin-top: 0.75em;
  margin-bottom: 0;
`;
