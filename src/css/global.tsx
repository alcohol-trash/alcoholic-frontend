import { css, Theme } from '@emotion/react'
import reset from 'emotion-reset'

export const globalCss = (theme: Theme) => css`
  ${reset}
  * {
    box-sizing: border-box;
  }
  body {
    color: white;
    font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui,
      Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo',
      'Noto Sans KR', 'Malgun Gothic', sans-serif;
    background-color: ${theme.gray[900]};
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
