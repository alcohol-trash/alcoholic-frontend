import { css } from '@emotion/react'
import theme from '@/theme'

export const container = css``

export const titleBlock = css`
  label {
    font-size: 16px;
    font-weight: 550;
    color: ${theme.aqua[500]};
  }
  input {
    margin: 20px 0;
  }
  input::placeholder {
    font-size: 22px;
    font-weight: 550;
    color: ${theme.gray[300]};
  }
`
export const contentBlock = css`
  textarea {
    background-color: transparent;
    border: none;
  }
  textarea::placeholder {
    font-size: 14px;
    color: ${theme.gray[300]};
  }
`
