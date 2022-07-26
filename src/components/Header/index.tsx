import Router from 'next/router'
import Image from 'next/image'

import * as styles from './styles'
import BackImg from 'public/assets/back.png'
import HomeImg from 'public/assets/home.png'
export type HeaderStyle =
  | 'left'
  | 'center'
  | 'right'
  | 'home'
  | 'default'
  | 'all'

type Props = {
  style?: HeaderStyle
  title?: string
  children?: React.ReactNode
}
//default -> left & center
//all -> left & center & right
const Header = ({ title, style = 'default', children }: Props) => {
  return (
    <section css={styles.container}>
      {(style === 'default' || style === 'left' || style === 'all') && (
        <section css={styles.leftBlock}>
          <div css={styles.imgBlock} onClick={() => Router.back()}>
            <Image src={BackImg} width={24} height={24} />
          </div>
        </section>
      )}
      {(style === 'default' || style === 'center' || style === 'all') && (
        <section css={styles.titleBlock}>{title}</section>
      )}
      {(style === 'right' || style === 'all') && (
        <section css={styles.rightBlock}>{children}</section>
      )}
      {style === 'home' && (
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
