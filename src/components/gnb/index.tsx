import Link from 'next/link'
import Image from 'next/image'

import * as styles from './styles'
import Title from '@/components/Title'

const Gnb = () => {
  return (
    <section css={styles.container}>
      <div css={[styles.block, styles.blockDetail]}>
        <Link href="/">
          <a>
            <Title>알코홀-릭</Title>
          </a>
        </Link>
        <Link href="/loginsignup">
          <a>
            <div css={[styles.block, styles.profile]}>
              <Image src="/assets/profile_img.png" width={32} height={32} />
            </div>
          </a>
        </Link>
      </div>
    </section>
  )
}

export default Gnb
