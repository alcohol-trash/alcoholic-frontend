import { css } from '@emotion/react'
import theme from '@/theme'

export const container = css`
  background-color: ${theme.gray[800]};

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  position: fixed;
  left: 50%;
  transform: translate(-50%);
  bottom: 0;

  padding: 0 20px;
  border-radius: 16px 16px 0 0;

  width: 375px;
  height: 462px;
`

export const titleBlock = css`
  text-align: center;
  font-size: 16px;
  margin: 16px;
`
export const btnBlock = css`
  display: flex;
  flex-direction: column;
  button {
    width: 100%;
    margin: 4px 0;
  }
`
