import { css } from '@emotion/react'
import theme from '@/theme'
import { TextSize, ButtonStyle, TextAlign } from './index'

export const Size = {
  xs: 12,
  sm: 14,
  base: 16,
}
export const Padding = {
  xs: {
    x: 12,
    y: 8,
  },
  sm: {
    x: 16,
    y: 12,
  },
  base: {
    x: 16,
    y: 12,
  },
}
export const Style = {
  default: {
    color: theme.gray[300],
    bgColor: theme.gray[700],
  },
  primary: {
    color: theme.gray[900],
    bgColor: theme.aqua[500],
  },
  secondary: {
    color: theme.gray[300],
    bgColor: 'transparent',
  },
}
export const button = css`
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 8px;
  box-shadow: none;
  padding: 12px 16px;
`
export const size = (size: TextSize) => {
  return (
    Size[size] &&
    css`
      font-size: ${Size[size]}px;
      padding: ${Padding[size]['y']}px ${Padding[size]['x']}px;
    `
  )
}
export const style = (style: ButtonStyle) => {
  return (
    Style[style] &&
    css`
      color: ${Style[style]['color']};
      background-color: ${Style[style]['bgColor']};
    `
  )
}
export const align = (align: TextAlign) => {
  return (
    align &&
    css`
      text-align: ${align};
    `
  )
}
