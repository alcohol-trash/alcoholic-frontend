import React from 'react'
import Image from 'next/image'

import * as styles from './styles'

type ImagesProps = {
  src?: string
}

type FeedContentProps = {
  writer?: string //작성자
  date?: string //작성일
  title?: string //제목
  content?: string //내용
  images?: ImagesProps[] //이미지
  heartCount?: number //좋아요 수
  commentCount?: number //댓글 수
}

type Props = {
  data?: FeedContentProps
  [key: string]: any
}

const Feed = ({ data }: Props) => {
  const { writer, date, title, content, images, heartCount, commentCount } =
    data || {}

  return (
    <section css={styles.Feed.FeedContainer}>
      <div css={styles.Feed.FeedHeader}>
        <div css={styles.Feed.FeedHeaderProfile}>
          <Image
            src="/assets/profile_default.png"
            alt="회색 배경에 흰 사람 동그란 프로필 이미지"
            width={32}
            height={32}
          />
        </div>
        <div css={styles.Feed.FeedHeaderTitle}>
          <strong>{writer}</strong>
          <p>{date}</p>
        </div>
      </div>

      <div css={styles.Feed.FeedContent}>
        <div css={styles.Feed.FeedContentTitle}>{title}</div>
        <p css={styles.Feed.FeedContentDescription}>{content}</p>
        <div css={styles.Feed.FeedContentImage}>
          <Image
            src="/assets/babamba.png"
            alt="바밤바 캔 막걸리"
            width={335}
            height={189}
            layout="responsive"
          />
        </div>
      </div>

      <div css={styles.Feed.FeedFooter}>
        <div css={styles.Feed.FeedLike}>{heartCount}</div>
        <div css={styles.Feed.FeedComment}>
          <p>댓글 {commentCount}개</p>
        </div>
      </div>
    </section>
  )
}

export default Feed
