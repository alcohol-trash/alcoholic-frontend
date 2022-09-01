import React from 'react'
import Image from 'next/image'

import * as styles from './styles'

type Props = {
  heartCount: number | undefined
  heartCheck: boolean | undefined
}

const LikeButton = ({ heartCount, heartCheck }: Props) => {
  return (
    <>
      <button
        css={
          heartCheck
            ? [styles.buttonLike, styles.button]
            : [styles.buttonNormal, styles.button]
        }
      >
        <Image src="/assets/like.png" width={13} height={16} />
        <span>{heartCount}</span>
      </button>
    </>
  )
}

export default React.memo(LikeButton)
