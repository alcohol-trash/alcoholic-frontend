import { css } from '@emotion/react'
import theme from '@/theme'

export const container = css`
  position: relative;
  height: 100vh;
  padding: 0 20px;
  button {
    padding: 0;
  }
`
export const emailBlock = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 16px 0;
`
export const btnBlock = css`
  width: 100%;
  position: absolute;
  bottom: 16%;
  padding-top: 24px;
  border-top: 1px solid ${theme.gray[700]};
  button {
    padding-left: 0;
  }
`
