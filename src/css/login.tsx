import { css } from '@emotion/react'
import theme from '../theme'

//Homebar
export const HomeBarCss = {
  Container: css`
    top: 0;
    left: 0;
    right: 0;
    height: 10vh;
  `,
  Block: css`
    width: 24px;
    height: 24px;
    float: right;
    margin: 15px 0 0 0;
    cursor: pointer;
  `,
}

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

//LoginPage
export const LoginPage = {
  Container: css`
    display: flex;
    flex-direction: column;
    height: 100vh;
    padding: 0 24px;
  `,
  TopContainer: css`
    display: flex;
    flex-direction: column;
    height: 20vh;
  `,
  BottomContainer: css`
    padding-top: 50px;
    height: 70vh;
  `,
  Title: css`
    margin: 10px 0;
    line-height: 1.5em;
    font-size: 20px;
  `,
  LinkBlock: css`
    a {
      color: ${theme.gray[300]};
      font-size: 13px;
    }
  `,
}
