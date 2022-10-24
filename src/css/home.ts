import { css } from '@emotion/react'
import theme from '@/theme'

export const container = css`
  padding: 48px 20px;
`

export const titleBlock = css`
  div {
    margin: 16px 0;
  }
`
export const btnBlock = css`
  margin-bottom: 16px;
  button {
    width: 49px;
    height: 26px;
    border: none;
    border-radius: 6px;
    font-size: 10px;
    font-weight: 600;
    color: ${theme.gray[300]};
    background-color: ${theme.gray[700]};
    margin: 4px 4px 4px 0;
  }
  button:focus {
    color: ${theme.aqua[500]};
    border: 1px solid ${theme.aqua[500]};
  }
`
export const btnFocus = css`
  button:focus {
    color: ${theme.aqua[500]};
    border: 1px solid ${theme.aqua[500]};
  }
`
export const boardBlock = css`
  padding-bottom: 5px;
`

export const ref = css`
  height: 50px;
`
