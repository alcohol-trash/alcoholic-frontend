import { css } from '@emotion/react'

export const Feed = {
  FeedContainer: css`
    padding-bottom: 20px;
  `,
  FeedHeader: css`
    display: flex;
    align-items: center;
  `,
  FeedHeaderProfile: css``,
  FeedHeaderTitle: css`
    display: flex;
    flex-direction: column;
    padding-left: 10px;
    font-size: 14px;
    p {
      font-size: 12px;
      padding-top: 4px;
    }
  `,
  FeedContent: css`
    display: flex;
    flex-direction: column;
  `,
  FeedContentTitle: css`
    padding-top: 10px;
    font-size: 18px;
    font-weight: 700;
  `,
  FeedContentDescription: css`
    padding-top: 6px;
    font-size: 16px;
    font-weight: 400;
  `,
  FeedContentImage: css`
    padding-top: 12px;
    img {
      border-radius: 10px;
      width: 100%;
    }
  `,
  FeedFooter: css`
    display: flex;
    justify-content: space-between;
  `,
  FeedHash: css``,
  FeedComment: css`
    padding-top: 20px;
    padding-right: 4px;
    p {
      font-weight: 400;
      strong {
        font-weight: 700;
      }
    }
  `,
  CategoryContainer: css`
    display: flex;
    margin-top: 12px;
    div {
      margin-right: 8px;
    }
  `,
}
