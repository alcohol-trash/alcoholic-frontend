import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import * as styles from './styles'

type Props = {
  isLoggedIn: boolean
  image: string
}

const Gnb = ({ isLoggedIn, image }: Props) => {
  return (
    <section css={styles.container}>
      <Link href="/">
        <a>
          <Image src="/assets/logo.png" width={74} height={20} />
        </a>
      </Link>
      <Link href={isLoggedIn ? '/my' : '/loginsignup'}>
        <a>
          <div css={styles.profile}>
            <img referrerPolicy="no-referrer" src={image} />
          </div>
        </a>
      </Link>
    </section>
  )
}

export default React.memo(Gnb)
