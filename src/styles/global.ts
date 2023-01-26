import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
/*
   1. Use a more-intuitive box-sizing model.
*/
*, *::before, *::after {
  box-sizing: border-box;
}
/*
  2. Remove default margin
*/
* {
  margin: 0;
}
/*
  3. Allow percentage-based heights in the application
*/
html, body {
  height: 100%;
}
/*
  Typographic tweaks!
  4. Add accessible line-height
  5. Improve text rendering
*/
body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  font-family: 'Montserrat', sans-serif;
}
/*
  6. Improve media defaults
*/
img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}
/*
  7. Remove built-in form typography styles
*/
input, button, textarea, select {
  font: inherit;
  outline: none;
}
/*
  8. Avoid text overflows
*/
p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}
/*
  9. Create a root stacking context
*/
#root, #__next {
  isolation: isolate;
}
::-webkit-scrollbar {
  width: 5px;
  height: 2px;
}
::-webkit-scrollbar-button {
  width: 0px;
  height: 0px;
}
::-webkit-scrollbar-thumb {
  background: #0F52BA;
  border: 0px none #ffffff;
}
::-webkit-scrollbar-thumb:hover {
  background: rgb(15,82,220);

}
::-webkit-scrollbar-thumb:active {
  background: rgb(15,42,140);

}
::-webkit-scrollbar-track {
  background: #9e9e9e;
  border: 0px none #fff;
}

::-webkit-scrollbar-track:active {
  background: #9e9e9e;
}
::-webkit-scrollbar-corner {
  background: transparent;
}
`;
