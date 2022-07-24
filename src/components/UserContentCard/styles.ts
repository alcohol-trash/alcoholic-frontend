import { css } from '@emotion/react'
import theme from '@/theme'
export const card = css`
  display: flex;
  justify-content: space-between;
  padding: 16px 20px;
  border-bottom: 1px solid ${theme.gray[800]};
  word-break: break-all;
`
export const cardTitle = css`
  font-weight: 600;
  margin-right: 6px;
`
export const cardDate = css`
  font-size: 12px;
  color: ${theme.gray[300]};
`
export const cardWriter = css`
  font-size: 14px;
  font-weight: 600;
  margin-right: 6px;
`
export const cardContent = css`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  opacity: 0.8;
  font-size: 14px;
  margin-top: 6px;
`
export const cardImg = css`
  padding-left: 8px;
  border-radius: 8px;
`
