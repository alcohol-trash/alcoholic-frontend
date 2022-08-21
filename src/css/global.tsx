import { css, Theme } from '@emotion/react'

export const globalCss = (theme: Theme) => css`
  * {
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
  }
  body {
    color: white;
    font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui,
      Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo',
      'Noto Sans KR', 'Malgun Gothic', sans-serif;
    background-color: ${theme.gray[900]};
    padding: 0;
    margin: 0;
  }
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  input {
    caret-color: ${theme.aqua[500]};
  }
  input: focus {
    outline: none;
  }
  a {
    text-decoration: none;
  }
  button {
    cursor: pointer;
  }
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    transition: background-color 5000s;
    -webkit-text-fill-color: #fff !important;
  }
  .Toastify--animate {
    animation-fill-mode: both;
    animation-duration: 0.7s;
  }

  .Toastify--animate-icon {
    animation-fill-mode: both;
    animation-duration: 0.3s;
  }

  @media only screen and (max-width: 480px) {
    .Toastify__toast {
      margin-bottom: 0;
      border-radius: 0;
    }
  }
  @keyframes Toastify__trackProgress {
    0% {
      transform: scaleX(1);
    }
    100% {
      transform: scaleX(0);
    }
  }

  .Toastify__progress-bar--animated {
    animation: Toastify__trackProgress linear 1 forwards;
  }

  @keyframes Toastify__bounceOut {
    to {
      opacity: 0;
    }
  }
  @keyframes Toastify__bounceIn {
    to {
      opacity: 1;
    }
  }

  .Toastify__bounce-enter--top-right,
  .Toastify__bounce-enter--bottom-right {
    animation-name: Toastify__bounceIn;
  }

  .Toastify__bounce-exit--top-right,
  .Toastify__bounce-exit--bottom-right {
    animation-name: Toastify__bounceOut;
  }
`

export const componentContainer = css`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`
