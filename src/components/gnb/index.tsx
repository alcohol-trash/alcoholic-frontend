import Link from 'next/link'
import Image from 'next/image'

import * as styles from './styles'
import Title from '@/components/Title'
import ProfileImg from '@/public/assets/profile_img.png'

const Gnb = () => {
  return (
    <section css={styles.container}>
      <div css={[styles.block, styles.blockDetail]}>
        <Link href="/">
          <Title>알코홀-릭</Title>
        </Link>
        <Link href="/loginsignup">
          <div css={[styles.block, styles.profile]}>
            <Image src={ProfileImg} width={32} height={32} />
          </div>
        </Link>
      </div>
      <ul css={styles.list}>
        <Link href="/main">
          <li css={styles.listItem}>주류학개론</li>
        </Link>
        <li css={styles.listItem}>술 위키</li>
        <li css={styles.listItem}>질문과 답변</li>
      </ul>
    </section>
  )
}

export default Gnb
