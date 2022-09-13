import { css } from '@emotion/react'
import theme from '@/theme'

export const container = css`
  display: flex;
  align-items: center;
  justify-items: center;
`
export const profile = css`
  display: flex;
  align-items: center;
  justify-items: center;
`
export const info = css`
  display: flex;
  flex-direction: column;
  padding-left: 10px;
  font-size: 14px;
  p {
    margin: 2px 0 0 0;
    font-size: 12px;
    color: ${theme.gray[300]};
  }
`
