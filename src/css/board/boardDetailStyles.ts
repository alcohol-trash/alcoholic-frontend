import { css } from '@emotion/react'
import theme from '@/theme'

export const wrapper = css`
  margin-top: 16px;
  padding: 0 20px 60px 20px;
`
export const menu = css`
  width: 60px;
  display: flex;
  justify-content: space-between;
`

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
export const reply = css`
  border-top: 1px solid ${theme.gray[800]};
`
