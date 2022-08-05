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
export const contentBlock = css`
  textarea {
    color: white;
    background-color: transparent;
    border: none;
    resize: none;
  }
  textarea::placeholder {
    font-size: 14px;
    color: ${theme.gray[300]};
  }
  textarea:focus {
    outline: none;
  }
`

export const bottomBlock = css`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px;
  margin: 0;
  border-top: 1px solid ${theme.gray[800]};
  div {
    display: inline-block;
    margin-left: 10px;
  }
`

export const leftBlock = css``
export const rightBlock = css``

export const lineBlock = css`
  margin-left: 10px;
  padding-left: 10px;
  border-left: 1px solid ${theme.gray[800]};
`
