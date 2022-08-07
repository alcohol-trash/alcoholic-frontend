import Link from 'next/link'
import Image from 'next/image'

import * as styles from './styles'
import Title from '@/components/Title'

type Props = {
  isLoggedIn: boolean
}

const Gnb = ({ isLoggedIn }: Props) => {
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
            <Image src="/assets/profile_img.png" width={32} height={32} />
          </div>
        </a>
      </Link>
    </section>
  )
}

export default Gnb
