import { css } from '@emotion/react'
import theme from '@/theme'

export const Description = {
  Container: css`
    display: flex;
    flex-direction: column;
  `,
  Block: css`
    margin: 10px;
    line-height: 1.5em;
    h1 {
      font-size: 20px;
      color: white;
    }
  `,
  Word: css`
    font-weight: 400;
    margin: 10px;
    font-size: 12px;
    color: ${theme.gray[300]};
    line-height: 1.5em;
  `,
}
