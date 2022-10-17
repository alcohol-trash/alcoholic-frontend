import React from 'react'

import * as styles from './styles'

type Props = {
  display: boolean
  title?: string
  children?: React.ReactNode
}

const TermsDetail = ({ display = false, title, children }: Props) => {
  return (
    <>
      {display && (
        <section css={styles.container}>
          <div css={styles.title}>{title}</div>
          <div css={styles.content}>{children}</div>
        </section>
      )}
    </>
  )
}

export default React.memo(TermsDetail)
