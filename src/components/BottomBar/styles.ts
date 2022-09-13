import { css } from '@emotion/react'
import theme from '@/theme'

export const container = css`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  height: 56px;
  padding: 8px 16px;

  background-color: ${theme.gray[900]};
`

export const form = css`
  display: flex;
  align-items: center;

  height: 40px;
  padding: 0px;
  width: 100%;
  textarea {
    cursor: pointer;
    width: 100%;
    font-size: 14px;
    background-color: ${theme.gray[700]};
    border-radius: 20px;
    padding: 10px 16px;
    border: none;
    overflow: hidden;
    resize: none;
    :focus {
      outline: none;
    }
    ::placeholder {
      color: ${theme.gray[300]};
    }
  }
`
export const block = css`
  margin: 10px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  cursor: pointer;
`
