import { css } from '@emotion/react'
import theme from '@/theme'

export const container = css`
  position: relative;
  height: 100%;
`
export const inputBlock = css`
  padding: 8px 0 14px;
  p {
    color: ${theme.gray[300]};
    font-size: 12px;
  }
`
export const btnBlock = css`
  position: absolute;
  width: 100%;
  height: 52px;
  bottom: 4%;
`
