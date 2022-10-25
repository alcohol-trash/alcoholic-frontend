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

export const imgBlock = css`
  float: left;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const imgName = css`
  background-color: ${theme.gray[700]};
  opacity: 0.8;
  height: 30px;
  border-radius: 8px;
  padding: 0 6px;
`
export const imgDelete = css`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  img {
    display: inline-block;
  }
`

export const imgBtn = css`
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
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  img {
    display: inline-block;
  }
`
