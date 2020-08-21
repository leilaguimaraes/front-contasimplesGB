import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  outline:0;
  box-sizing: border-box;
}
body{
  -webkit-font-smoothing: antialiased;
}
  ::-webkit-scrollbar-thumb{
    background: #E2E2E2;
    border-radius: 10px;
  }

`
