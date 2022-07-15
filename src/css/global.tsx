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
`

export const componentContainer = css`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  padding: 0 20px;
`
