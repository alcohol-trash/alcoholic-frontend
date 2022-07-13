import { css } from '@emotion/react'
import theme from '@/theme'

export const modalContainer = css`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);

  width: 335px;
  height: 168px;
  background-color: ${theme.gray[800]};

  border-radius: 16px;
`
export const block = css`
  div {
    text-align: center;
    height: 50%;
    text-algin: center;
    padding: 35px 0 0 0;
  }
  button {
    color: #ffffff;
    font-size: 15px;
    border: none;
    background-color: transparent;
  }
`
