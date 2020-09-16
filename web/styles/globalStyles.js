import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-size: 18px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    line-height: 1.5;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: 1.1;
    font-weight: 600;
    text-transform: uppercase;
  }

  h1 {
    font-size: 3em;
  }
  h2 {
    font-size: 2em;
  }
  h3 {
    font-size: 1.8em;
  }
  h4 {
    font-size: 1.5em;
  }
  h5 {
    font-size: 1.3em;
  }
  h6 {
    font-size: 1em;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ul,
  li,
  ol,
  dl,
  dd,
  dt,
  hr,
  form,
  input,
  textarea,
  blockquote,
  table {
    margin: 15px 0;
  }

  strong {
    font-weight: 600;
  }

  em {
    font-style: italic;
  }


  img {
    max-width: 100%;
  }

  table {
    width: 100%;

    thead {
      border-bottom: 1px solid;
    }

    tr {
      &:nth-child(2n)  {
        td,
        th {
          background-color: #eee;
        }
      }
    }
  }

  dl,
  ol,
  ul {
    padding-left: 30px;

  }

  dl {
    dd {
      margin-left: 30px;
    }
  }

  ol {
    list-style: decimal;
  }

  ul {
    list-style: disc;
  }

  blockquote {
    background-color: #eee;
    width: 75%;
    padding: 30px;

    footer {
      background-color: #fff;
      padding: 5px 15px;
      display: inline-block;
    }
  }

  pre {
    background-color: #eee;
    font-family: monospace;
    overflow: auto;
    width: 100%;
  }

  form {
    width: 100%;

  }

  textarea {
    border-radius: 0px;
    appearance: none;
    padding: 5px;
    width: 100%;
    border: 1px solid #ccc;
    max-width: 100%;
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";

    &::placeholder {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    }
  }

  button {
    box-shadow: 0 0;
    background: none;
    border: none;
    border-radius: 0px;
    appearance: none;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    border: 1px solid #ccc;
    padding: 10px 20px;
    cursor: pointer;

    &:hover {
      background-color: #ccc;
    }
  }

  input {
    box-shadow: 0 0;
    background: none;
    border-radius: 0px;
    appearance: none;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";

    &::placeholder {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    }

    &[type="text"],
    &[type="email"],
    &[type="password"],
    &[type="url"],
    &[type="number"],
    &[type="tel"],
    &[type="search"],
    &[type="time"],
    &[type="date"],
    &[type="datetime-local"],
    &[type="datetime"],
    &[type="week"],
    &[type="message"],
    &[type="month"] {
      padding: 5px;
      width: 100%;
      max-width: 100%;
      box-sizing: border-box;
      box-shadow: 0 0;
      border: 1px solid #ccc;
    }

    &[type="button"],
    &[type="reset"],
    &[type="submit"] {
      border: 1px solid #ccc;
      padding: 10px 20px;
      cursor: pointer;

      &:hover {
        background-color: #ccc;
      }
    }
  }

  textarea {
    min-height: 150px;
  }
`;

export default GlobalStyle;
