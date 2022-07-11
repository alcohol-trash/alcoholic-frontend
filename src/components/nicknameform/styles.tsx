import { css } from '@emotion/react'
import theme from '@/theme'

export const NicknameForm = {
  Container: css`
    display: flex;
    flex-direction: column;
    height: 60vh;
  `,
  Form: css`
    position: relative;
    height: 100%;
    input {
      width: 100%;
      height: 50px;
      border-radius: 10px;
      font-size: 14px;
      background-color: ${theme.gray[300]};
      border: none;
      overflow: hidden;
      resize: none;
      margin: 7px 0;
    }
  `,
  BtnBlock: css`
    position: absolute;
    bottom: 5%;
  `,
}
