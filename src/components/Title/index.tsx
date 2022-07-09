import * as styles from './styles'

type Props = {
  children?: React.ReactNode
}
const Title = ({ children }: Props) => {
  return (
    <div css={styles.container}>
      <div css={styles.title}>{children}</div>
    </div>
  )
}

export default Title
