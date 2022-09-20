import React, { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'

import { contentData, commentData } from '@/libs/mocks/mockData'

import Header from '@/components/Header'
import BackButton from '@/components/BackButton'
import Profile from '@/components/Profile'
import ContentBottom from '@/components/ContentBottom'
import Reply from '@/components/Reply'

import * as styles from '@/css/content/contentDetailStyles'
import ContentBar from '@/components/ContentBar'

const ContentDetail = () => {
  const router = useRouter()
  const { query } = router
  const cid = parseInt(query.id as string)

  const data = contentData.find(({ seq }) => seq === cid)
  const {
    title,
    content,
    heartCheck,
    heartCount,
    createdDate,
    writer,
    repliesNum,
    images,
  } = data || {}
  return (
    <>
      <Header
        left={<BackButton />}
        right={
          <div css={styles.menu}>
            <Image src="/assets/share.png" width={24} height={24} />
            <Image src="/assets/more.png" width={24} height={24} />
          </div>
        }
      />
      <div css={styles.wrapper}>
        <Profile writer={writer} date={createdDate} />
        <div css={styles.title}>{title}</div>
        <div css={styles.content}>{content}</div>
        <div>
          {images?.map((img, index) => (
            <div key={img.seq} css={styles.image}>
              <img referrerPolicy="no-referrer" src={img.url} />
            </div>
          ))}
        </div>
        <ContentBottom
          heartCount={heartCount}
          heartCheck={heartCheck}
          seq={cid}
          repliesNum={repliesNum}
        />
        <div css={styles.reply}>
          {commentData?.map((item, index) => {
            if (item.isRoot) {
              return (
                <>
                  <Reply key={item.seq} data={item} />
                </>
              )
            }
          })}
        </div>
      </div>
      <ContentBar boardSeq={cid} />
    </>
  )
}

export default React.memo(ContentDetail)
