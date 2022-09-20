import { css } from '@emotion/react'
import theme from '@/theme'

export const container = css`
  display: flex;
  padding: 10px 0 0 0;
`
export const image = css`
  padding-right: 10px;
  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }
`
export const name = css`
  padding-right: 2px;
  font-size: 14px;
`

export const date = css`
  font-size: 12px;
  color: ${theme.gray[300]};
`

export const reply = css`
  font-size: 18px;
  line-height: 150%;
`
export const button = css`
  padding-left: 30px;
`
