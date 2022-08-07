import { css } from '@emotion/react'
import theme from '@/theme'

export const Feed = {
  FeedContainer: css`
    padding-bottom: 40px;
  `,
  FeedHeader: css`
    display: flex;
    align-items: center;
  `,
  FeedHeaderProfile: css`
    padding-top: 4px;
  `,
  FeedHeaderTitle: css`
    display: flex;
    flex-direction: column;
    padding-left: 10px;
    font-size: 14px;
    p {
      margin: 0;
      font-size: 12px;
      color: ${theme.gray[300]};
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
    font-size: 14px;
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
    align-items: center;
    color: ${theme.gray[300]};
    font-size: 14px;
  `,
  FeedLike: css``,
  FeedComment: css``,
}
