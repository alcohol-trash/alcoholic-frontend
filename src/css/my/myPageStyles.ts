import { css } from '@emotion/react'
import theme from '@/theme'
export const container = css`
  position: relative;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`
export const nav = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
  a {
    color: white;
  }
`
export const profile = css`
  text-align: center;
  margin: 0 auto;
  padding: 8px 0 16px;
  button {
    width: 80px;
  }
`
export const img = css`
  width: 80px;
  height: 80px;
  margin: 0 auto;
  border-radius: 50%;
  background-color: ${theme.gray[300]};
`
export const name = css`
  padding: 12px 0 10px;
  font-weight: 600;
  font-size: 18px;
`
export const noData = css`
  text-align: center;
  span {
    display: block;
    font-size: 14px;
    color: ${theme.gray[300]};
    margin: 16px 0;
  }
  button {
    width: 100px;
  }
`
