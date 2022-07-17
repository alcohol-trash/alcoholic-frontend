import React from 'react'
import * as styles from './styles'
export type TextSize = 'xs' | 'sm' | 'base'

type Props = {
  children?: React.ReactNode
  size?: TextSize
}
const Sentence = ({ children, size = 'xs' }: Props) => {
  return (
    <div css={styles.container}>
      <div css={[styles.sentence, styles.size(size)]}>{children}</div>
    </div>
  )
}

export default React.memo(Sentence)
