import React from 'react'
import * as styles from './styles'
import Sentence from '@/components/Sentence'

type NoticeTitleProps = {
  title: string
  description: string
}

const NoticeTitle = ({ title, description }: NoticeTitleProps) => {
  return (
    <section css={styles.container}>
      <h2 css={styles.title}>
        <strong> {title}</strong>
      </h2>
      <Sentence size="sm">{description}</Sentence>
    </section>
  )
}

export default NoticeTitle
