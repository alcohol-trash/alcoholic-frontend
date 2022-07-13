import { css } from '@emotion/react'
import theme from '@/theme'

export const container = css`
  height: 100vh;
`
export const topContainer = css`
  height: 20vh;
`
export const bottomContainer = css`
  height: 70vh;
`
export const linkBlock = css`
  margin: 15px 0;
  a {
    color: ${theme.gray[300]};
    font-size: 13px;
  }
`
