import Link from 'next/link'
import Image from 'next/image'

import * as styles from './styles'
import HomeImg from 'public/assets/home.png'

const Homebar = () => {
  return (
    <section css={styles.container}>
      <Link href="/">
        <div css={styles.block}>
          <Image src={HomeImg} width={24} height={24} />
        </div>
      </Link>
    </section>
  )
}

export default Homebar
