import React from 'react'
import Link from 'next/link'

import Title from '@/components/Title'

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
          <Title>알코홀-릭</Title>
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
