import { css } from '@emotion/react'
import theme from '@/theme'

//Global Navigation Bar
export const container = css`
  top: 0;
  left: 0;
  right: 0;
`
export const block = css`
  display: flex;
  align-items: center;
`
export const blockDetail = css`
  padding: 20px 20px;
  justify-content: space-between;
`
export const profile = css`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  cursor: pointer;
`
export const list = css`
  list-style: none;
  color: ${theme.gray[300]};
`
export const listItem = css`
  display: inline-block;
  width: 33%;
  text-align: center;
  padding-bottom: 14px;
  border-bottom: 1px solid ${theme.gray[800]};
  cursor: pointer;
`
