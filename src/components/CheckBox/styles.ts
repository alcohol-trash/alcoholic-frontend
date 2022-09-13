import { css } from '@emotion/react'

export const container = css`
  display: inline-block;
  margin: 8px 0;
  input {
    position: absolute;
    width: 0;
    height: 0;
    padding: 0;
    overflow: hidden;
    border: 0;
  }
  img {
    cursor: pointer;
  }
  label {
    font-size: 14px;
    vertical-align: middle;
    margin: 8px 4px;
  }
`
