import { css } from '@emotion/react'
import theme from '@/theme'

export const button = css`
  width: 60px;
  height: 30px;
  border-radius: 6px;
  background-color: transparent;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    margin-left: 4px;
  }
`

export const buttonNormal = css`
  color: ${theme.gray[300]};
  border: 1px solid ${theme.gray[700]};
`

export const buttonLike = css`
  color: ${theme.aqua[500]};
  border: 1px solid ${theme.aqua[500]};
`
