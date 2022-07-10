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

//Local LoginPage
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

//login & signup
export const LoginSignupPage = {
  Container: css`
    display: flex;
    flex-direction: column;
    height: 100vh;
    padding: 0 32px;
  `,
  TopContainer: css`
    height: 65vh;
    padding-top: 100px;
  `,
  Title: css`
    font-size: 28px;
    line-height: 1.2em;
    span {
      color: ${theme.aqua[500]};
    }
  `,
  BottomContainer: css`
    display: flex;
    flex-direction: column;
    height: 35vh;
    font-size: 13px;
    margin: auto;
    p {
      margin: 5px auto;
      color: ${theme.gray[300]};
    }
  `,
  ImgBlock: css`
    display: flex;
    flex-direction: row;
    div{
        inline-block;
        height: 76px;
        padding: 10px;
    }
  `,
  LinkBlock: css`
    margin: 20px auto;
    a {
      color: ${theme.gray[300]};
    }
  `,
}

//Local SignupPage -> 이용약관 페이지
export const LocalTermsPage = {
  Container: css`
    display: flex;
    flex-direction: column;
    height: 100vh;
    padding: 0 20px;
  `,
  Block: css`
    display: flex;
    flex-direction: column;
    padding-top: 48px;
    height: 25vh;
    h1 {
      margin: 10px 0;
      line-height: 1.2em;
      font-size: 22px;
    }
  `,
}

//Local SignupPage -> 이메일 인증 페이지
export const LocalEmailPage = {
  Container: css`
    display: flex;
    flex-direction: column;
    height: 100vh;
    padding: 0 20px;
  `,
  Block: css`
    display: flex;
    flex-direction: column;
    padding-top: 48px;
    height: 25vh;
    h1 {
      margin: 10px 0;
      line-height: 1.2em;
      font-size: 22px;
    }
  `,
}

//Local SignupPage -> 회원가입 정보 입력 페이지
export const LocalInfoPage = {
  Container: css`
    display: flex;
    flex-direction: column;
    height: 100vh;
    padding: 0 20px;
  `,
  Block: css`
    display: flex;
    flex-direction: column;
    padding-top: 48px;
    height: 25vh;
    h1 {
      margin: 10px 0;
      line-height: 1.2em;
      font-size: 22px;
    }
  `,
}
