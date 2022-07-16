import { css } from '@emotion/react'
import theme from '@/theme'
export const container = css`
  position: relative;
  font-size: 12px;
  color: ${theme.aqua[500]};
  display: flex;
  flex-direction: column;
  gap: 8px;
`
export const msg = css`
  color: ${theme.gray[300]};
  white-space: pre-wrap;
`
