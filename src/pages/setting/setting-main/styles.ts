import { css } from '@emotion/react'
import theme from '@/theme'

export const container = css`
  padding: 0 20px;
`
export const list = css`
  li {
    margin-bottom: 5px;
    padding: 20px 0;
  }
`
export const border = css`
  border-bottom: 1px solid ${theme.gray[700]};
`
