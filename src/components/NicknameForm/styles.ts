import { css } from '@emotion/react'
import theme from '@/theme'

export const container = css`
  height: 100%;
  position: relative;
`
export const form = css`
  input {
    width: 100%;
    height: 50px;
    border-radius: 8px;
    font-size: 14px;
    background-color: ${theme.gray[800]};
    color: #ffffff;
    border: none;
    overflow: hidden;
    resize: none;
    margin: 6px 0;
  }
`
export const btnBlock = css`
  position: absolute;
  width: 100%;
  height: 52px;
  bottom: 4%;
`
