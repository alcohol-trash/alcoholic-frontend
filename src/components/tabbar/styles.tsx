import { css } from '@emotion/react'
import theme from '@/theme'

export const Tabbar = {
  Container: css`
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;

    display: flex;
    justify-content: center;
    align-items: center;
    height: 56px;
    padding: 8px 16px;

    background-color: ${theme.gray[900]};
  `,
  Form: css`
    display: flex;
    align-items: center;

    height: 40px;
    padding: 0px;
    width: 100%;
    textarea {
      width: 100%;
      font-size: 14px;
      background-color: ${theme.gray[700]};
      border-radius: 20px;
      padding: 10px 16px;
      border: none;
      overflow: hidden;
      resize: none;

      ::placeholder {
        color: ${theme.gray[300]};
      }
    }
  `,
  Block: css`
    margin: 10px;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    cursor: pointer;
  `,
}
