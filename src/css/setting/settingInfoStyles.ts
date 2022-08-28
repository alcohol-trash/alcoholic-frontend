import { css } from '@emotion/react'
import theme from '@/theme'

export const container = css`
  padding: 16px 20px;
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
  position: fixed;
  bottom: 12%;
  left: 20px;
  right: 20px;
  padding: 24px 0;
  border-top: 1px solid ${theme.gray[700]};
  button {
    padding-left: 0;
  }
`
