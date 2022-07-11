import { css } from '@emotion/react'
import theme from '@/theme'

export const SocialLogin = {
  Container: css`
    display: flex;
    flex-direction: column;
    height: 100vh;
  `,
  TopContainer: css`
    display: flex;
    height: 60vh;
    h1 {
      padding-left: 30px;
      padding-top: 80px;
      font-size: 20px;
    }
  `,
  BottomContainer: css`
    display: flex;
    flex-direction: column;
    height: 40vh;
    font-size: 14px;
    div {
      margin: 10px auto;
    }
    p {
      color: ${theme.gray[300]};
      margin: 0 auto;
    }
    a {
      color: ${theme.gray[300]};
    }
  `,
  Block: css`
    display: inline-block;
    height: 76px;
    padding: 10px;
  `,
}
