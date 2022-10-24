import React from 'react'
import * as R from 'ramda'

import { BoardProps, ImageProps } from '@/interfaces/board'

import LikeButton from '@/components/LikeButton'

import * as styles from './styles'

type Props = {
  data: BoardProps
}

const BoardContent = ({ data }: Props) => {
  const { title, content, images, seq, heartCount, heartCheck, repliesNum } =
    data || {}
  return (
    <section>
      <div css={styles.title}>{title}</div>
      <div css={styles.content}>{content}</div>
      {!R.isEmpty(images) && (
        <div>
          {images?.map((img: ImageProps) => (
            <div key={img.seq} css={styles.image}>
              <img referrerPolicy="no-referrer" src={img.url} />
            </div>
          ))}
        </div>
      )}
      <div css={styles.bottom}>
        <LikeButton heartCount={heartCount} heartCheck={heartCheck} seq={seq} />
        <div>
          <p>댓글 {repliesNum}개</p>
        </div>
      </div>
    </section>
  )
}

export default React.memo(BoardContent)
