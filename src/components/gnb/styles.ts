import { css } from '@emotion/react'
import theme from '@/theme'

//Global Navigation Bar
export const container = css`
  position: fixed;
  top: 0;
  width: 100%;
  height: 48px;
  overflow: hidden;
  background-color: ${theme.gray[900]};
  z-index: 1;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const profile = css`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  cursor: pointer;
`
