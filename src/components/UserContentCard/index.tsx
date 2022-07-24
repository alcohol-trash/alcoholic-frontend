import React from 'react'
import * as styles from './styles'

type ImagesProps = {
  src?: string
}
type UserContentProps = {
  title?: string
  content?: string
  date?: string
  toWriter?: string
  images?: ImagesProps[]
}
type Props = {
  data?: UserContentProps
  [key: string]: any
}
const UserContentCard = ({ data }: Props) => {
  const { title, date, content, images, toWriter } = data || {}

  return (
    <>
      <div css={styles.card}>
        <div>
          <div>
            {title && <span css={styles.cardTitle}>{title}</span>}
            {date && <span css={styles.cardDate}>{date}</span>}
          </div>
          <div css={styles.cardContent}>
            {toWriter && <span css={styles.cardWriter}>@{toWriter}</span>}
            {content}
          </div>
        </div>
        {images && (
          <div css={styles.cardImg}>
            <img src="/assets/test_img.png" width={60} />
          </div>
        )}
      </div>
    </>
  )
}

export default React.memo(UserContentCard)
