import React from 'react'
import Image from 'next/image'
import Router from 'next/router'

import * as styles from './styles'

const BackButton = () => {
  return (
    <div css={styles.imgBlock} onClick={() => Router.back()}>
      <Image src="/assets/back.png" width={24} height={24} />
    </div>
  )
}

export default React.memo(BackButton)
