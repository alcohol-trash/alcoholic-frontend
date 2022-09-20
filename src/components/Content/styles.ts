import { css } from '@emotion/react'
import theme from '@/theme'

export const container = css`
  padding-bottom: 40px;
`

export const content = css`
  display: flex;
  flex-direction: column;
`
export const contentTitle = css`
  padding-top: 10px;
  font-size: 18px;
  font-weight: 700;
`

export const contentDescription = css`
  font-size: 14px;
  font-weight: 400;
`
export const contentImage = css`
  padding-top: 12px;
  img {
    border-radius: 10px;
    width: 100%;
  }
`
