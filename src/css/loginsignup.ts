import { css } from '@emotion/react'
import theme from '../theme'

//login & signup
export const container = css`
  height: 100vh;
  padding: 0 12px;
`
export const topContainer = css`
  height: 65vh;
  padding-top: 100px;
`
export const bottomContainer = css`
  display: flex;
  flex-direction: column;
  height: 35vh;
  font-size: 13px;
  margin: auto;
  p {
    margin: 5px auto;
    color: ${theme.gray[300]};
  }
`

export const title = css`
  font-size: 28px;
  line-height: 1.2em;
  span {
    color: ${theme.aqua[500]};
  }
`

export const imgBlock = css`
    display: flex;
    flex-direction: row;
    margin: 0 auto;
    div{
        inline-block;
        height: 76px;
        padding: 10px;
    }
`
export const linkBlock = css`
  margin: 20px auto;
  a {
    color: ${theme.gray[300]};
  }
`
