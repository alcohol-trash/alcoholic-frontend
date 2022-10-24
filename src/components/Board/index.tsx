import React, { useCallback, useMemo } from 'react'
import Router from 'next/router'
import * as R from 'ramda'

import { BoardProps } from '@/interfaces/board'

import Profile from '@/components/Profile'
import LikeButton from '@/components/LikeButton'

import * as styles from './styles'

type Props = {
  data: BoardProps
  isLoggedIn?: boolean
}

const Board = ({ isLoggedIn = false, data }: Props) => {
  const {
    content,
    createdDate,
    heartCheck,
    heartCount,
    images,
    seq,
    title,
    writer,
    repliesNum,
  } = data || {}

  const contentLimit = useMemo(() => {
    if (content.length >= 30) {
      return content.substring(0, 30) + '...'
    } else {
      return
    }
  }, [content])

  const handleClick = useCallback(() => {
    if (isLoggedIn) {
      Router.push(`/board/${seq}`)
    }
  }, [isLoggedIn, seq])

  return (
    <section css={styles.container}>
      <Profile writer={writer} date={createdDate} />
      <div css={styles.content} onClick={handleClick}>
        <div css={styles.contentTitle}>{title}</div>
        <p css={styles.contentDescription}>{contentLimit}</p>
        {!R.isEmpty(images) && (
          <div css={styles.contentImage}>
            <img
              referrerPolicy="no-referrer"
              src={images ? images[0].url : ''}
            />
          </div>
        )}
      </div>
      <div css={styles.bottom}>
        <LikeButton heartCount={heartCount} heartCheck={heartCheck} seq={seq} />
        <div>
          <p>댓글 {repliesNum}개</p>
        </div>
      </div>
    </section>
  )
}

export default React.memo(Board)
