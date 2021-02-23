import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';

import colors from './colors';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    scroll-behavior:smooth;
    --webkit-font-smoothing: antialiased !important;
  }

  input, textarea, button, select, a {
    -webkit-tap-highlight-color: rgba(0,0,0,0);
  }

  html, body, #root {
    height: 100%;
      &.fixed {
      overflow: hidden;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      width: 100%;
    }
    ::-webkit-scrollbar {
      width: 8px;
      background: ${colors.primary};
      height: 8px;
    }
    ::-webkit-scrollbar-button {
      height: 0;
    }
    ::-webkit-scrollbar-track {
      background: ${colors.lighter};
    }
    ::-webkit-scrollbar-thumb {
      width: 8px;
      background: ${colors.primary};
      height: 8px;
    }
  }


  body {
    text-rendering: optimizeLegibility;
    background: #333;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  body, input, button {
    color: #222;
    font-size: 14px;
    font-family: 'Montserrat', Arial, sans-serif !important;
    @media screen and (max-width:767px) {
    }
  }

  input.whiteFill:-internal-autofill-selected,
  input.whiteFill:-webkit-autofill,
  input.whiteFill:-webkit-autofill:hover,
  input.whiteFill:-webkit-autofill:focus {
    -webkit-text-fill-color: ${colors.white};
  }

  input:-internal-autofill-selected,
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus {
    -webkit-text-fill-color: ${colors.primary};
    transition: background-color 5000s ease-in-out 0s;
  }

  h1, h2, h3, h4, h5, h6, p, label, span, strong, b {
    line-height: 120%;
  }

  a, button {
    cursor: pointer;
    transition: all .3s ease;
  }


  .Toastify__toast-container {
    width: 400px !important;
    max-width: 100%;
  }
  .toast-container {
    .Toastify__toast--success {
      background: ${colors.secondary};
      border-radius: 12px;
    }
    .Toastify__toast--error {
      background: ${colors.danger};
      border-radius: 12px;
    }
    .toast-style {
      min-height: 120px;
      background: #1a1a1a;
      border-radius: 12px;
      color: ${colors.lighter};
      .Toastify__close-button--default {
        color: ${colors.lighter};
        padding: 0 5px;
      }
      .Toastify__progress-bar--default {
        background: ${colors.lighter};
      }
    }
  }
 
  .ulPaginate {
    list-style: none;
    display: flex;
    margin: 15px 0 0;
    padding: 5px 0;
  }
  .ulPaginate li {
    border: 1px solid ${colors.primary};
    border-collapse: collapse;
    width: 30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    color: ${colors.primary};
    font-weight: bold;
    font-size: 15px;
    cursor: pointer;
    transition: all .3s ease-in-out;
    & a {
      display: block;
    }
    &.previous {
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
      font-size: 17px;
    }
    &.next {
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
      font-size: 17px;
    }
    :hover {
      background: ${colors.primary};
      color: ${colors.white};
    }
    &.active {
      background: ${colors.primary};
      color: ${colors.white};
    }
  }

  .Toastify__toast-container {
    width: 400px !important;
    max-width: 100%;
    border-radius: 12px;
  }
  .toast-container {
    .Toastify__toast--success {
      background: ${colors.success};
      border-radius: 12px;
    }
    .Toastify__toast--error {
      background: ${colors.danger};
      border-radius: 12px;
    }
    .toast-style {
      min-height: 120px;
      background: #1a1a1a;
      border-radius: 12px;
      color: ${colors.lighter};
      .Toastify__close-button--default {
        color: ${colors.lighter};
        padding: 0 5px;
      }
      .Toastify__progress-bar--default {
        background: ${colors.lighter};
      }
    }
  }

  @keyframes zoomIn {
    0% {
      transform: scale(1, 1, 1);
    }
    100% {
      transform: scale(1.1, 1.1, 1.1);
    }
  }


  @keyframes openDrawer {
    from {
      transform: translateX(-250px);
    }
    to {
      transform: translateX(0px);
    }
  }

  @keyframes closeDrawer {
    from {
      transform: translateX(0px);
    }
    to {
      transform: translateX(-250px);
    }
  }
`;
