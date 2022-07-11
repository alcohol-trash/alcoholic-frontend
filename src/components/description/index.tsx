import React from 'react'
import * as styles from './styles'

interface DescriptionProps {
  titleFirst: string
  titleSecond?: string
  explainFirst?: string
  explainSecond?: string
}

const Description = ({
  titleFirst,
  titleSecond,
  explainFirst,
  explainSecond,
}: DescriptionProps) => {
  return (
    <section css={styles.Description.Container}>
      <div css={styles.Description.Block}>
        <h1>
          {' '}
          {titleFirst}
          <br />
          {titleSecond}
        </h1>
      </div>
      <p css={styles.Description.Word}>
        {explainFirst}
        <br />
        {explainSecond}
      </p>
    </section>
  )
}

export default Description
