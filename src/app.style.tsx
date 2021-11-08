import { createGlobalStyle } from 'styled-components';

type ThemeType = {
  bg: '#504E58' | '#EDEDED';
  color: '#EDEDED' | '#504E58';
};

export const UniversalStyle = createGlobalStyle<{ theme: ThemeType }>`
  html {
      box-sizing: border-box;
  
  }
  *, *::before, *::after {
      box-sizing: inherit;
  }
  
  body{
    background-color: ${(props) => props.theme.bg};
    color: ${(props) => props.theme.color};
    font-family: 'Inter', sans-serif; 
    box-sizing: border-box;
    margin:0;
    padding:0;
  }`;
