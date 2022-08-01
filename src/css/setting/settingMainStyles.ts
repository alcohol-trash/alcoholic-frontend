import { css } from '@emotion/react'
import theme from '@/theme'

export const container = css`
  padding: 0 20px;
`
export const list = css`
  li {
    margin-bottom: 4px;
    padding: 20px 0;
    cursor: pointer;
  }
`
export const border = css`
  border-bottom: 1px solid ${theme.gray[700]};
`
export const liColor = css`
  color: ${theme.gray[300]};
`
