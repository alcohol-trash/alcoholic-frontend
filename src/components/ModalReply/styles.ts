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
  padding: 8px;

  background-color: ${theme.gray[900]};
`

export const form = css`
  display: flex;
  align-items: center;
  width: calc(100% - 70px);
  height: 40px;
  padding: 0px;
`
export const textarea = css`
  width: 100%;
  textarea {
    color: white;
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
export const reReply = css`
  color: white;
  cursor: pointer;
  width: 100%;
  background-color: ${theme.gray[700]};
  border-radius: 20px;
  padding: 10px 16px;
  border: none;
  display: flex;
  algin-items: center;
  div {
    display: inline-block;
    color: ${theme.aqua[500]};
    font-size: 14px;
  }
  textarea {
    margin-left: 10px;
    width: 68%;
    cursor: pointer;
    color: white;
    border: none;
    overflow: hidden;
    font-size: 14px;
    resize: none;
    background-color: transparent;
    :focus {
      outline: none;
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

export const button = css`
  width: 70px;
`
