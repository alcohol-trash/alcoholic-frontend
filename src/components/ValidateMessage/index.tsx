import React from 'react'
import * as styles from './styles'

type Props = {
  result?: any
  [key: string]: any
}
const ValidateMessage = ({ result, ...args }: Props) => {
  return (
    <>
      {result ? (
        <span css={styles.container} {...args}>
          {result.message || '필드를 확인해주세요.'}
        </span>
      ) : null}
    </>
  )
}

export default React.memo(ValidateMessage)
