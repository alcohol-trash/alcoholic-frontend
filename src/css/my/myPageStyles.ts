import { css } from '@emotion/react'
import theme from '@/theme'

export const container = css`
  position: relative;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`
export const noData = css`
  text-align: center;
  span {
    display: block;
    font-size: 14px;
    color: ${theme.gray[300]};
    margin: 16px 0;
  }
  button {
    width: 100px;
  }
`
