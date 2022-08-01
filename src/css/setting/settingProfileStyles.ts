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
  width: 80px;
  height: 80px;
  margin: 0 auto;
  border-radius: 50%;
  background-color: ${theme.gray[300]};
`
export const nickname = css`
  margin: 10px 0;
  text-align: center;
  font-size: 16px;
`

export const inputBlock = css`
  display: flex;
  height: 44px;
`
export const leftBlock = css`
  flex-grow: 9;
`
export const rightBlock = css`
  flex-grow: 1;
  margin-left: 10px;
`
