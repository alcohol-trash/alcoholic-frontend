import React from 'react'
import * as styles from './styles'

interface NoticeTitleProps {
  title: string
  description: string
}

const NoticeTitle = ({ title, description }: NoticeTitleProps) => {
  return (
    <section css={styles.NoticeTitle.Container}>
      <h2 css={styles.NoticeTitle.H2}>
        <strong> {title}</strong>
      </h2>
      <p css={styles.NoticeTitle.Description}>{description}</p>
    </section>
  )
}

export default NoticeTitle
