import Link from 'next/link'
import Image from 'next/image'

import * as styles from './styles'
import HomeImg from '@/public/assets/home.png'
export type Style = ''

type Props = {
  title?: string
}

const Header = () => {
  return (
    <section css={styles.container}>
      <section></section>
      <section></section>
      <section>
        <Link href="/">
          <div css={styles.block}>
            <Image src={HomeImg} width={24} height={24} />
          </div>
        </Link>
      </section>
    </section>
  )
}

export default Header
