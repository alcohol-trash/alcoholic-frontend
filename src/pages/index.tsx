import React, { useState } from 'react'
import Link from 'next/link'
import Router from 'next/router'

import Tabbar from '@/components/tabbar'
import Gnb from '@/components/gnb'
import NoticeTitle from '@/components/noticetitle'
import Category from '@/components/category'
import Feed from '@/components/feed'
import ModalAlert from '@/components/ModalAlert'

import * as styles from '@/css/home'

const Home = () => {
  const [isLoggedIn, setLoggedIn] = useState(false)
  const [modal, setModal] = useState<boolean>(false)
  return (
    <>
      <Gnb />
      <section css={styles.container}>
        <NoticeTitle
          title="주류학개론"
          description="술에 대한 정보, 리뷰를 올려주세요."
        />
        <section css={styles.topContainer}>
          {CATEGORY_DUMMY.map((data) => (
            <Category content={data.content} key={data.id} />
          ))}
        </section>
        <section
          css={styles.bottomContainer}
          onClick={() => {
            if (!isLoggedIn) {
              setModal(!modal)
            }
          }}
        >
          <Feed />
          <Feed />
          <Feed />
        </section>
        <ModalAlert
          title={'로그인 후에 이용할 수 있어요'}
          type={'confirm'}
          btnName="로그인"
          btnProp={true}
          isOpen={modal}
          onHandleNext={() => Router.push('/loginsignup')}
          onClick={() => setModal(!modal)}
        />
        <Tabbar
          onClick={() => {
            if (isLoggedIn) {
              Router.push('/')
            } else {
              Router.push('/loginsignup')
            }
          }}
        />
      </section>
    </>
  )
}

export default Home

const CATEGORY_DUMMY = [
  {
    id: 1,
    content: '최신순',
  },
  {
    id: 2,
    content: '추천순',
  },
]
