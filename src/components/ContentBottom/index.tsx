import React from 'react'

import LikeButton from '@/components/LikeButton'

import * as styles from './styles'

type Props = {
  seq?: number
  heartCount?: number
  heartCheck?: boolean
  repliesNum?: number
}

const ContentBottom = ({ seq, heartCount, heartCheck, repliesNum }: Props) => {
  return (
    <div css={styles.container}>
      <LikeButton heartCount={heartCount} heartCheck={heartCheck} seq={seq} />
      <div>
        <p>댓글 {repliesNum}개</p>
      </div>
    </div>
  )
}

export default React.memo(ContentBottom)
