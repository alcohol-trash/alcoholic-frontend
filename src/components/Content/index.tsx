import React from 'react'
import Router from 'next/router'

import Profile from '@/components/Profile'
import ContentBottom from '@/components/ContentBottom'

import * as styles from './styles'

type BoardsProps = {
  content: string
  createdData: string
  heartCheck: boolean
  heartCount: number
  images: any
  seq: number
  title: string
  updatedDate: string
  writer: string
  repliesNum: number
}

type Props = {
  data?: BoardsProps
  isLoggedIn: boolean
}

const Content = ({ isLoggedIn, data }: Props) => {
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
    repliesNum,
  } = data || {}

  const handleClick = () => {
    if (isLoggedIn) {
      Router.push(`/board/${seq}`)
    }
  }

  return (
    <section css={styles.container}>
      <Profile writer={writer} date={createdData} />
      <div css={styles.content} onClick={handleClick}>
        <div css={styles.contentTitle}>{title}</div>
        <p css={styles.contentDescription}>{content}</p>
        {images?.length !== 0 && (
          <div css={styles.contentImage}>
            <img
              referrerPolicy="no-referrer"
              src={images ? images[0].url : ''}
            />
          </div>
        )}
      </div>
      <ContentBottom
        heartCount={heartCount}
        heartCheck={heartCheck}
        seq={seq}
        repliesNum={repliesNum}
      />
    </section>
  )
}

export default Content
