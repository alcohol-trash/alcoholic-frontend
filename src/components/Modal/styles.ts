import { css } from '@emotion/react'
import theme from '@/theme'

export const modalContainer = css`
  background-color: ${theme.gray[800]};

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  padding: 0 20px;
  border-radius: 16px;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
`

export const size = (width: number, height: number) => {
  return css`
    width: ${width}px;
    height: ${height}px;
  `
}
export const middle = () => {
  return css`
    border-radius: 16px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
  `
}

export const bottom = () => {
  return css`
    border-radius: 16px 16px 0 0;
    left: 50%;
    transform: translate(-50%);
    bottom: 0;
  `
}

export const titleBlock = css`
  text-align: center;
  font-size: 16px;
  margin-top: 16px;
`
export const childrenBlock = css``
export const btnBlock = css`
  display: flex;
  flex-direction: column;
  button {
    width: 100%;
    margin: 4px 0;
  }
`
