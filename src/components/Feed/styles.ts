import { css } from '@emotion/react'
import theme from '@/theme'

export const container = css`
  padding-bottom: 40px;
`
export const header = css`
  display: flex;
  align-items: center;
`

export const profile = css`
  padding-top: 4px;
`
export const title = css`
  display: flex;
  flex-direction: column;
  padding-left: 10px;
  font-size: 14px;
  p {
    margin: 0;
    font-size: 12px;
    color: ${theme.gray[300]};
  }
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

export const footer = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${theme.gray[300]};
  font-size: 14px;
`
