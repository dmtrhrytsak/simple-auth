import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *,
  ::after,
  ::before {
    box-sizing: border-box;
  }

  body,
  p {
    margin: 0;
  }

  a {
    text-decoration: none;
    color: #3F94E2;
  }

  button {
    border: none;

    cursor: pointer;
  }

  input {
    font-family: inherit;
  }

  body {
    background-color: #478CCC;

    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  }
`;

export default GlobalStyle;
