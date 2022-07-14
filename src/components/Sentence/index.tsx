import React from 'react'
import * as styles from './styles'

type Props = {
  children?: React.ReactNode
}
const Sentence = ({ children }: Props) => {
  return (
    <div css={styles.container}>
      <div css={styles.sentence}>{children}</div>
    </div>
  )
}

export default React.memo(Sentence)
