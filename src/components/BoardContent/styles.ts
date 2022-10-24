import { css } from '@emotion/react'
import theme from '@/theme'

export const title = css`
  font-size: 22px;
  font-weight: 600;
  margin: 24px 0 12px;
`
export const content = css`
  opacity: 0.8;
`
export const image = css`
  padding: 10px 0;
  text-align: center;
  img {
    border-radius: 10px;
    width: 100%;
  }
`
export const bottom = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${theme.gray[300]};
  font-size: 14px;
`
