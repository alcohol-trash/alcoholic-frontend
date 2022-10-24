import { css } from '@emotion/react'
import theme from '@/theme'

export const container = css`
  display: flex;
  flex-direction: column;
  padding: 10px 0 0 0;
`

export const innerContainer = css`
  display: flex;
  padding: 10px 0 0 0;
  position: relative;
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
export const replyButton = css`
  padding-left: 30px;
`

export const menu = css`
  position: absolute;
  right: 0;
  cursor: pointer;
`

export const button = css`
  padding: 4px 0;
`

export const reReplyBlock = css`
  padding-left: 40px;
`
