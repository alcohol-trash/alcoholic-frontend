import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import * as styles from './styles'

type Props = {
  isLoggedIn?: boolean
  image?: string
}

const TopBar = ({ isLoggedIn = false, image }: Props) => {
  return (
    <section css={styles.container}>
      <Link href="/">
        <a>
          <Image src="/assets/logo.png" width={74} height={20} alt="알콜홀릭" />
        </a>
      </Link>
      <Link href={isLoggedIn ? '/my' : '/loginsignup'}>
        <a>
          <div css={styles.profile}>
            <img referrerPolicy="no-referrer" src={image} alt="사용자이미지" />
          </div>
        </a>
      </Link>
    </section>
  )
}

export default React.memo(TopBar)
