import { css } from '@emotion/react'
import theme from '@/theme'

export const container = css`
  padding: 0 20px;
  display: flex;
  flex-direction: column;
`

export const btnBlock = css`
  display: flex;
  justify-content: flex-end;
`

export const label = css`
  input {
    position: absolute;
    width: 0;
    height: 0;
    padding: 0;
    overflow: hidden;
    border: 0;
  }
  img {
    text-align: center;
  }
`
export const imgBlock = css`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 12px;
  cursor: pointer;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  background-color: ${theme.gray[700]};
`
export const profileBlock = css`
  width: 100%;
`
export const img = css`
  text-align: center;
  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
`
export const nickname = css`
  margin: 10px 0;
  text-align: center;
  font-size: 16px;
`

export const inputBlock = css`
  display: flex;
  height: 44px;
  width: 100%;
`
export const leftBlock = css`
  flex-grow: 9;
`
export const rightBlock = css`
  flex-grow: 1;
  margin-left: 10px;
`
