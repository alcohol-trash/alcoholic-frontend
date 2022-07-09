import { css } from '@emotion/react'
import theme from '@/theme'

//LoginForm
export const LoginForm = {
  Container: css`
    display: flex;
    flex-direction: column;
  `,
  Form: css`
    input {
      position: relative;
      width: 100%;
      font-size: 14px;
      background-color: transparent;
      border: none;
      border-bottom: 1px solid ${theme.gray[700]};
      overflow: hidden;
      resize: none;
      margin: 10px 0;
      padding: 10px 0;
      color: white;
    }
    input::placeholder {
      color: ${theme.gray[300]};
      font-size: 16px;
    }
  `,
  BtnBlock: css`
    position: absolute;
    bottom: 5%;
  `,
}
