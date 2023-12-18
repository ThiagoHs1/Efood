import { createGlobalStyle } from 'styled-components'

export const cores = {
  branco: '#fff',
  corHeader: '#e66767',
  corBody: '#ffebd9',
  corDestaque: '#fff8f1'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '728px',
  mobile: '576px'
}
export const GlobalCss = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Roboto, sans-serif;
  list-style: none
}

body {
  background-color: ${cores.corDestaque};
  color: ${cores.corHeader};
}

.container {
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: ${breakpoints.desktop}) {

  }
}
`
