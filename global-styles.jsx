import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

  /*** Reset ***/

*:where(:not(iframe, canvas, img, svg, video):not(svg *)) {
  all: unset;
  display: revert;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

ol,
ul {
  list-style: none;
}

img {
  max-width: 100%;
}

table {
  border-collapse: collapse;
}

textarea {
  white-space: revert;
}

a, button {
  cursor:pointer
}

/*** --Reset-- ***/

html,body {
  font-family: 'Inter', sans-serif;
  font-size: 16px;
}

`;
