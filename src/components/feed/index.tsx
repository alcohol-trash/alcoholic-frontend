import React from 'react'
import Image from 'next/image'

import Profile from '@/components/Profile'

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
      <Profile writer={writer} date={date} />
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
