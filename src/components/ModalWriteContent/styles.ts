import { css } from '@emotion/react'
import theme from '@/theme'

export const container = css`
  padding: 0 20px;
`

export const titleBlock = css`
  label {
    font-size: 16px;
    font-weight: 550;
    color: ${theme.aqua[500]};
  }
  input {
    margin: 20px 0;
  }
  input::placeholder {
    font-size: 22px;
    font-weight: 550;
    color: ${theme.gray[300]};
  }
`
export const bottomBlock = css`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  padding: 10px;
  margin: 0;
  border-top: 1px solid ${theme.gray[800]};
`

export const imgBtn = css`
  display: inline-block;
  float: right;
  input {
    position: absolute;
    width: 0;
    height: 0;
    padding: 0;
    overflow: hidden;
    border: 0;
  }
  label {
    cursor: pointer;
  }
`
