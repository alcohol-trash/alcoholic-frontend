import { css } from '@emotion/react'
import theme from '@/theme'
export const tabs = css`
  display: flex;
  flex-direction: row;
  width: 100%;
`
export const tabsInner = (isSelected: boolean) => {
  return css`
    width: 100%;
    text-align: center;
    padding: 10px 0;
    font-size: 14px;
    border-bottom: ${isSelected
      ? `1px solid ${theme.aqua[500]}`
      : '1px solid #ddd'};
    span {
      color: ${theme.aqua[500]};
    }
  `
}
export const tabsPanel = (isSelected: boolean) => {
  return css`
    padding: 4px 0;
    display: ${isSelected ? 'block' : 'none'};
  `
}
