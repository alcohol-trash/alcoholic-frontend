import { css } from '@emotion/react'
import theme from '@/theme'

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
  justify-content: center;
  align-items: center;

  position: relative;
`
export const titleBlock = css`
  font-size: 16px;
`
export const leftBlock = css`
  position: absolute;
  left: 20px;
  display: inline;
`
export const rightBlock = css`
  position: absolute;
  right: 20px;
  button {
    padding: 0;
  }
  display: inline;
`
