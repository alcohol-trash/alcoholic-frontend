import { css } from '@emotion/react'
import theme from '@/theme'

export const container = css`
  background-color: ${theme.gray[800]};
  height: 230px;
  border-radius: 6px;
  padding: 10px;
  overflow: hidden;
`

export const title = css`
  font-size: 12px;
  font-weight: 600;
  padding: 0 0 8px 0;
`

export const content = css`
  font-size: 12px;
  font-weight: 500;
  color: ${theme.gray[300]};
  white-space: pre-wrap;
`
