import * as styles from './styles'

type Props = {
  title?: string
  left?: React.ReactNode
  right?: React.ReactNode
}

const Header = ({ title, left, right }: Props) => {
  return (
    <section css={styles.container}>
      <section css={styles.leftBlock}>{left}</section>
      <section css={styles.titleBlock}>{title}</section>
      <section css={styles.rightBlock}>{right}</section>
    </section>
  )
}

export default Header
