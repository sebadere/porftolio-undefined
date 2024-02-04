import { createGlobalStyle } from 'styled-components';
import theme from './theme';

const GlobalStyles = createGlobalStyle`
  body {
    font-family: ${theme.fonts.main};
  }
`;

export default GlobalStyles;
