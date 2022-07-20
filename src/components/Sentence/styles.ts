import { css } from '@emotion/react'
import theme from '@/theme'
import { TextSize } from './index'

export const Size = {
  xs: 12,
  sm: 14,
  base: 16,
}

export const size = (size: TextSize) => {
  return (
    Size[size] &&
    css`
      font-size: ${Size[size]}px;
    `
  )
}

export const container = css`
  position: relative;
`
export const sentence = css`
  color: ${theme.gray[300]};
`
