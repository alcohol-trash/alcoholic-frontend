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

  display: flex;
  flex-direction: column;
  justify-conent: space-evenly;
`
export const titleBlock = css`
  text-align: center;
  padding: 34px 0 0 0;
  font-size: 14px;
`
export const btnBlock = css`
  margin: auto;
`
export const btn = css`
  color: #ffffff;
  border: none;
  background-color: transparent;
  font-size: 14px;
`
