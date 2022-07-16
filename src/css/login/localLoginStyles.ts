import { css } from '@emotion/react'
import theme from '@/theme'

export const container = css`
  padding: 0 20px;
`

export const topContainer = css`
  height: 20vh;
`
export const bottomContainer = css`
  height: 70vh;
`
export const linkBlock = css`
  margin: 14px 0;
  a {
    color: ${theme.gray[300]};
    font-size: 12px;
  }
`
