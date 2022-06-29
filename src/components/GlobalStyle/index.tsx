import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import 'react-toastify/dist/ReactToastify.css';

import variables, { breakpoints } from '@/configs/css-variables';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap');
  ${reset}

  :root {
    ${variables}
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%;
  }

  body {
    box-sizing: border-box;
    line-height: 1.8;
    font-family: Helvetica, Aria, sans-serif;
    font-size: 1.6rem;
  }

  a {
    text-decoration: none;
  }

  .container {
    width: 100%;
    margin: 0 auto;
  }
  @media screen and (max-width: ${breakpoints.sm_max} )  {
    .container {
      max-width: 540px;
    }
  }
  @media screen and (min-width: ${breakpoints.md_min}) and (max-width: ${breakpoints.md_max} )  {
    .container {
      max-width: 720px;
    }
  }
  @media screen and (min-width: ${breakpoints.lg_min}) and (max-width: ${breakpoints.lg_max} )  {
    .container {
      max-width: 960px;
    }
  }
  @media screen and (min-width: ${breakpoints.xl_min}) and (max-width: ${breakpoints.xl_max} )  {
    .container {
      max-width: 1144px;
    }
  }
  @media screen and (min-width: ${breakpoints.xxl_min}) {
    .container {
      max-width: 1320px;
    }
  }
`;

export default GlobalStyle;
