import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

:root{
    --color-blue: #3D75BB;
    --color-lightblue: #5D9CEC;
    --color-gray: #656565;
    --color-lightgray: #CECECE;
    --color-black: #000000;
    --color-white: #FFFFFF;

}

body {
    margin: 0;
    background-color: rgb(232, 238, 248);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
  
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
  
h1, h2, h3, h4, h5, h6, p, span, li{
    font-family: 'Source Sans Pro', sans-serif;
} 


`