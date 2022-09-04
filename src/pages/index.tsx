import React, { useState, useEffect } from 'react'
import { useQuery, useInfiniteQuery } from 'react-query'
import Head from 'next/head'
import Router from 'next/router'
import { useRouter } from 'next/router'

import Title from '@/components/Title'
import Sentence from '@/components/Sentence'
import Gnb from '@/components/Gnb'
import Tabs from '@/components/Tabs'
import Feed from '@/components/Temp'
import BottomBar from '@/components/BottomBar'
import ModalAlert from '@/components/ModalAlert'
import NoContentsBlock from '@/components/NoContentsBlock'

import { mainData } from '@/libs/mocks/homeData'
import { categories } from '@/libs/data'
import * as styles from '@/css/home'

const Home = () => {
  const { data: me } = useQuery(
    'user',
    async () => await fetch(`/api/member`).then((response) => response.json()),
    {
      retry: 0,
    },
  )

  const router = useRouter()
  const [modal, setModal] = useState<boolean>(false)
  const [index, setIndex] = useState<number>(1)

  const handleBtnClick = async () => {
    //
  }
  const getData = (index: number) => {
    setIndex(index)
  }
  return (
    <>
      <Head>
        <title>알코홀릭</title>
      </Head>
      <Gnb isLoggedIn={me?.success} />
      <section css={styles.container}>
        <Tabs defaultSelected={0} router={router} getData={getData}>
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
                    if (!me?.success) {
                      setModal(!modal)
                    }
                  }}
                >
                  {mainData.map((data, index) => (
                    <Feed key={index} data={data} />
                  ))}
                </section>
              ) : (
                <NoContentsBlock isLoggedIn={me?.success} />
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
      <BottomBar isLoggedIn={me?.success} index={index} />
    </>
  )
}

export default Home
