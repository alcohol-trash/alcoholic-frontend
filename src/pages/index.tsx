import React, { useState, useEffect } from 'react'
import Router from 'next/router'
import { useRouter } from 'next/router'
import { useQueryClient } from 'react-query'

import Title from '@/components/Title'
import Sentence from '@/components/Sentence'

import Gnb from '@/components/gnb'
import Tabs from '@/components/Tabs'
import Feed from '@/components/feed'
import Bottombar from '@/components/Bottombar'
import ModalAlert from '@/components/ModalAlert'

import { categories, mainData } from '@/libs/mocks/homeData'

import * as styles from '@/css/home'
import Nocontentsblock from '@/components/nocontentsblock'

const Home = () => {
  const router = useRouter()
  const query = useQueryClient()
  const userData = query.getQueryData('user')
  const [isLoggedIn, setLoggedIn] = useState(false)
  const [modal, setModal] = useState<boolean>(false)

  useEffect(() => {
    if (userData) {
      setLoggedIn(true)
    }
  }, [userData, setLoggedIn])
  const handleBtnClick = () => {
    //
  }
  return (
    <>
      <Gnb isLoggedIn={isLoggedIn} />
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
                    if (!isLoggedIn) {
                      setModal(!modal)
                    }
                  }}
                >
                  {mainData.map((data, index) => (
                    <Feed key={index} data={data} />
                  ))}
                </section>
              ) : (
                <Nocontentsblock isLoggedIn={isLoggedIn} />
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
      <Bottombar isLoggedIn={isLoggedIn} />
    </>
  )
}

export default Home
