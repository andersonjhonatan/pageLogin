import { createGlobalStyle } from "styled-components";

export const Global =  createGlobalStyle`
  body {
    background-color: var(--primary-color);
    margin: 0;
    padding: 0;
    color: var(--primary--color--paragraph);
    max-width: 100vw;
    max-height: 100vh;
  }
  :root {
    --primary-color: #191816;
    --secondary-color: #24221F;
    --primary--color--title: #D4CCB6;
    --primary--color--paragraph: #AFB6C2;
    --primary--color--Button--icons: #FFC632;
    --primary--color--Button--hover: #ffbb10;
    --primary--color--p--button: #473404;
  }
`