import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'
// import { fontFace } from './fontFace' // ${ fontFace }
// import { test } from './test.styles' // ${ test }

const GlobalStyle = createGlobalStyle`
	${ normalize }

  * {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html, body, #root {
    width: 100%;
    /* height: 100%; */
    min-height: 100%;
    box-sizing: border-box;
  }

  body {
    font:400 1rem/1.5 'Gotham Book', sans-serif;
    letter-spacing: 0.025em;
  }

  /*  */

  a {
    color: inherit;
    text-decoration: unset;
  }

	button {
		border: unset;
    display: inline-block;
    cursor: pointer;
  }

	button:focus,
	input:focus
	{ outline: unset; }
`

export default GlobalStyle
