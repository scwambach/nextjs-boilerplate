import { createGlobalStyle } from 'styled-components';
import { font, colors } from '@/styles/settings';

const GlobalStyle = createGlobalStyle`
  body {
    font-size: 18px;
    font-family: ${font.primary};
    line-height: 1.5;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${font.secondary};
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
    padding-left: 15px;

  }

  dl {
    dd {
      margin-left: 15px;
    }
  }

  ol {
    list-style: decimal;
  }

  ul {
    list-style: disc;
  }

  a {
    color: ${colors.blue};
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: ${colors.green}
    }
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
    font-family: ${font.primary};

    &::placeholder {
      font-family: ${font.primary};
    }
  }

  button {
    box-shadow: 0 0;
    background: none;
    border: none;
    border-radius: 0px;
    appearance: none;
    font-family: ${font.primary};
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
    font-family: ${font.primary};

    &::placeholder {
      font-family: ${font.primary};
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

  .video-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    pointer-events: none;
    overflow: hidden;

    iframe {
      width: 100vw;
      height: 56.25vw; /* Given a 16:9 aspect ratio, 9/16*100 = 56.25 */
      min-height: 100vh;
      min-width: 177.77vh; /* Given a 16:9 aspect ratio, 16/9*100 = 177.77 */
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;

export default GlobalStyle;
