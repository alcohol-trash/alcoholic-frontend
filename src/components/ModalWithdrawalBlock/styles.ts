import { css } from '@emotion/react'
import theme from '@/theme'

export const modalBlock = css`
  background-color: ${theme.gray[700]};
  width: 335px;
  height: 197px;
  border-radius: 16px;
  padding: 14px;
  font-size: 14px;
  ul {
    padding: 14px;
    list-style: disc;
    color: ${theme.gray[300]};
    li {
      padding-bottom: 10px;
    }
  }
`
