import { Global, css } from '@emotion/react';

const GlobalStyles = () => (
  <Global
    styles={css`
      * {
        box-sizing: border-box;
      }
      body {
        background-color: #f0f1f3;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
      }

      * ::-webkit-scrollbar {
        height: 8px;
        width: 8px;
      }
      * ::-webkit-scrollbar-corner {
        background: #0000;
      }
      * ::-webkit-scrollbar-thumb {
        background: #808080b3;
        border-radius: 10px;
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
      }
      * ::-webkit-scrollbar-track {
        border-radius: 10px;
      }
    `}
  />
);

export default GlobalStyles;
