import { css } from '@emotion/react'
import theme from '@/theme'

export const textarea = css`
  width: 100%;
  height: 60vh;
  color: white;
  background-color: transparent;
  border: none;
  resize: none;
  ::placeholder {
    font-size: 14px;
    color: ${theme.gray[300]};
  }
  :focus {
    outline: none;
  }
  ::-webkit-scrollbar {
    width: 3px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${theme.aqua[500]};
    border-radius: 10px;
    height: 30%;
  }
  ::-webkit-scrollbar-track {
    background-color: ${theme.gray[800]};
    border-radius: 10px;
  }
`
