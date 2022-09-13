import { css } from '@emotion/react'

export const container = css`
  position: fixed;
  top: 50%;
  left: 50%;
  right: auto;
  bottom: auto;
  transform: translate(-50%, -50%);
  width: 100%;
  text-align: center;
  padding-top: 30px;
  button {
    width: 90px;
    height: 36px;
    padding: 0;
    margin: 10px;
  }
`
