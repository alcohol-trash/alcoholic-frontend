import { css } from '@emotion/react'
import theme from '@/theme'

export const NoticeTitle = {
  Container: css`
    display: flex;
    flex-direction: column;
    padding: 20px 0 15px 0;
  `,
  H2: css`
    font-size: 20px;
    font-weight: 700;
    padding: 10px 0;
    strong {
      color: white;
    }
  `,
  Description: css`
    font-weight: 400;
    padding-top: 6px;
    font-size: 12px;
    color: ${theme.gray[300]};
  `,
}
