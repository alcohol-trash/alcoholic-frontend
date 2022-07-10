import { css } from '@emotion/react'
import theme from '@/theme'

export const container = css`
  position: relative;
`
export const input = css`
  width: 100%;
  height: 44px;
  line-height: 44px;
  font-size: 16px;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid ${theme.gray[700]};
  color: white;
  padding: 0;
`
