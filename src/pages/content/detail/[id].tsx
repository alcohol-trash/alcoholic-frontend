import React from 'react'
import { useRouter } from 'next/router'

import { contentData } from '@/libs/mocks/mockData'

import Header from '@/components/Header'
import Backbutton from '@/components/Backbutton'
import Profile from '@/components/Profile'

import * as styles from './styles'

const ContentDetail = () => {
  const router = useRouter()
  const { query } = router
  const { id: cid } = query

  const data = contentData.find(({ id }) => id === parseInt(cid as string))
  const { title, content, writer, created } = data || {}
  return (
    <>
      <Header left={<Backbutton />} />
      <div css={styles.wrapper}>
        <Profile writer={writer} date={created} />
        <div css={styles.title}>{title}</div>
        <div css={styles.content}>{content}</div>
      </div>
    </>
  )
}

export default React.memo(ContentDetail)
