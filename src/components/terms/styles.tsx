import { css } from '@emotion/react'
import theme from '@/theme'

export const Terms = {
  Container: css`
    display: flex;
    flex-drection: column;
    height: 75vh;
  `,
  Form: css`
    position: relative;
    width: 100%;
    padding-top: 20px;
    font-size: 15px;
  `,
  InputBlock: css`
    display: flex;
    align-items: center;
    input {
      display: none;
      cursor: pointer;
    }
    label {
      margin: 10px 3px;
    }
  `,
  InputBlockLine: css`
    border-bottom: 1.5px solid ${theme.gray[800]};
  `,
  Word: css`
    color: ${theme.aqua[500]};
  `,
  BtnBlock: css`
    position: absolute;
    bottom: 5%;
  `,
}
