import { css } from '@emotion/react'
import theme from '@/theme'

export const container = css`
  padding: 48px 20px 0px 20px;
`

export const form = css`
  height: 85vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 6%;
  input::placeholder {
    color: ${theme.gray[300]};
  }
`
