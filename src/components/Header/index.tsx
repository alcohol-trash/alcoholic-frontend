import Router from 'next/router'
import Image from 'next/image'

import * as styles from './styles'
import BackImg from 'public/assets/back.png'
import HomeImg from 'public/assets/home.png'
export type HeaderStyle = 'default' | 'left' | `right`

type Props = {
  title?: string
  style?: HeaderStyle
}

const Header = ({ title, style = 'default' }: Props) => {
  return (
    <section css={styles.container}>
      {style === 'left' && (
        <section css={styles.leftBlock}>
          <div css={styles.imgBlock} onClick={() => Router.back()}>
            <Image src={BackImg} width={24} height={24} />
          </div>
        </section>
      )}
      <section css={styles.titleBlock}>{title}</section>
      {style === 'right' && (
        <section css={styles.rightBlock}>
          <div css={styles.imgBlock} onClick={() => Router.push('/')}>
            <Image src={HomeImg} width={24} height={24} />
          </div>
        </section>
      )}
    </section>
  )
}

export default Header
