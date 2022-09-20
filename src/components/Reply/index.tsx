import React from 'react'
import { css } from '@emotion/react'

import Button from '@/components/Button'

import * as styles from './styles'

type ReplyProps = {
  seq: number
  replyParent: number
  isRoot: boolean
  createdDate: string
  updatedDate: null
  content: string
}

type Props = {
  data?: ReplyProps
}

const Reply = ({ data }: Props) => {
  const { seq, replyParent, isRoot, createdDate, updatedDate, content } =
    data || {}
  return (
    <>
      <div css={styles.container}>
        <div css={styles.image}>
          <img referrerPolicy="no-referrer" src="/assets/profile_default.png" />
        </div>
        <div>
          <div>
            <span css={styles.name}>익명</span>
            <span css={styles.date}>{createdDate}</span>
          </div>
          <div css={styles.reply}>{content}</div>
        </div>
      </div>
      {isRoot && (
        <div css={styles.button}>
          <Button style="secondary" size="xs">
            답글 달기
          </Button>
        </div>
      )}
    </>
  )
}

export default React.memo(Reply)
