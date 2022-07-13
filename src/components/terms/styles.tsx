import { css } from '@emotion/react'
import theme from '@/theme'

export const container = css`
  height: 100%;
  position: relative;
  padding-top: 30px;
`

export const form = css`
  font-size: 15px;
`

export const word = css`
  color: ${theme.aqua[500]};
`
export const blockLine = css`
  border-bottom: 1.5px solid ${theme.gray[800]};
`

export const inputBlock = css`
  display: flex;
  align-items: center;
  input {
    display: none;
    cursor: pointer;
  }
  label {
    margin: 10px 3px;
  }
`
export const btnBlock = css`
  position: absolute;
  width: 100%;
  height: 52px;
  bottom: 5%;
`
