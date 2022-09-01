import React from 'react'
import Image from 'next/image'

import LikeButton from '@/components/LikeButton'

import * as styles from './styles'

interface BoardsProps {
  content: string
  createdData: string
  heartCheck: boolean
  heartCount: number
  images: any
  seq: number
  title: string
  updatedDate: string
  writer: string
}

interface Props {
  data?: BoardsProps
  [key: string]: any
}

const Feed = ({ data }: Props) => {
  const {
    content,
    createdData,
    heartCheck,
    heartCount,
    images,
    seq,
    title,
    updatedDate,
    writer,
  } = data || {}

  return (
    <section css={styles.container}>
      <div css={styles.header}>
        <div css={styles.profile}>
          <Image
            src="/assets/profile_default.png"
            alt="회색 배경에 흰 사람 동그란 프로필 이미지"
            width={32}
            height={32}
          />
        </div>
        <div css={styles.title}>
          <strong>{writer}</strong>
          <p>{createdData}</p>
        </div>
      </div>

      <div css={styles.content}>
        <div css={styles.contentTitle}>{title}</div>
        <p css={styles.contentDescription}>{content}</p>
        {images?.length !== 0 && (
          <div css={styles.contentImage}>
            <Image
              src={images[0].url}
              alt="바밤바 캔 막걸리"
              width={335}
              height={189}
              layout="responsive"
            />
          </div>
        )}
      </div>

      <div css={styles.footer}>
        <LikeButton heartCount={heartCount} heartCheck={heartCheck} />
        <div>
          <p>댓글 0개</p>
        </div>
      </div>
    </section>
  )
}

export default Feed
