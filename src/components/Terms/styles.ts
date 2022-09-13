import { css } from '@emotion/react'
import theme from '@/theme'

export const container = css`
  height: 100%;
  position: relative;
  padding-top: 30px;
`

export const form = css``
export const blockLine = css`
  border-bottom: 1.5px solid ${theme.gray[800]};
  color: ${theme.aqua[500]};
  padding: 8px 0;
`
export const inputBlock = css`
  display: flex;
  flex-direction: column;
  margin: 8px 0;
`
export const button = css`
  font-size: 12px;
  font-weight: 600;
  color: ${theme.gray[300]};
  display: inline;
  background-color: transparent;
  border: none;
`
export const withBtnBlock = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const btnBlock = css`
  position: absolute;
  width: 100%;
  height: 52px;
  bottom: 4%;
`
