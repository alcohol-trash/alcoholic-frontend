import React, { useState } from 'react'
import { useQuery } from 'react-query'
import Router from 'next/router'
import { useRouter } from 'next/router'

import Title from '@/components/Title'
import Sentence from '@/components/Sentence'
import Gnb from '@/components/gnb'
import Tabs from '@/components/Tabs'
import Feed from '@/components/feed'
import Bottombar from '@/components/Bottombar'
import ModalAlert from '@/components/ModalAlert'
import Nocontentsblock from '@/components/nocontentsblock'

import { categories, mainData } from '@/libs/mocks/homeData'
import * as styles from '@/css/home'

const Home = () => {
  const { data: me } = useQuery(
    'user',
    async () =>
      await fetch(`/api/member/info`).then((response) => response.json()),
  )
  const router = useRouter()
  const [modal, setModal] = useState<boolean>(false)
  const handleBtnClick = () => {
    //
  }
  return (
    <>
      <Gnb isLoggedIn={me && me.email} />
      <section css={styles.container}>
        <Tabs defaultSelected={0} router={router}>
          {categories.map((category, index) => (
            <Tabs.Panel key={index} name={category.name}>
              <section css={styles.titleBlock}>
                <Title>{category.name}</Title>
                <Sentence size="sm">{category.description}</Sentence>
                <section css={styles.btnBlock}>
                  <button onClick={handleBtnClick}>최신순</button>
                  <button onClick={handleBtnClick}>인기순</button>
                </section>
              </section>
              {mainData.length !== 0 ? (
                <section
                  onClick={() => {
                    if (!me || !me.email) {
                      setModal(!modal)
                    }
                  }}
                >
                  {mainData.map((data, index) => (
                    <Feed key={index} data={data} />
                  ))}
                </section>
              ) : (
                <Nocontentsblock isLoggedIn={me && me.email} />
              )}
            </Tabs.Panel>
          ))}
        </Tabs>
        <ModalAlert
          title={'로그인 후에 이용할 수 있어요'}
          type={'confirm'}
          btnName="로그인"
          isOpen={modal}
          onClick={() => Router.push('/loginsignup')}
          onCancel={() => setModal(!modal)}
        />
      </section>
      <Bottombar isLoggedIn={me && me.email} />
    </>
  )
}

export default Home
