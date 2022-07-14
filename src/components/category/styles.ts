import { css } from '@emotion/react'

export const Category = {
  Container: css`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;

    background-color: var(--gray-700);
    border-radius: 10px;
    width: 58px;
    height: 31px;
    strong {
      color: var(--gray-300);
    }
    p {
      padding-left: 6px;
      color: var(--gray-300);
    }
  `,
}
