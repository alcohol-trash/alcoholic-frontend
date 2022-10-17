import React, { useState, useEffect, useCallback } from 'react'
import { dehydrate, QueryClient, useQuery, useInfiniteQuery } from 'react-query'
import { useInView } from 'react-intersection-observer'
import Head from 'next/head'
import { useRouter } from 'next/router'

import { memberInfoAPI } from '@/api/user'
import { getBoardsAPI } from '@/api/board'
import { categories } from '@/libs/data'

import Title from '@/components/Title'
import Sentence from '@/components/Sentence'
import Gnb from '@/components/Gnb'
import Tabs from '@/components/Tabs'
import Content from '@/components/Content'
import BottomBar from '@/components/BottomBar'
import ModalAlert from '@/components/ModalAlert'
import NoContentsBlock from '@/components/NoContentsBlock'

import * as styles from '@/css/home'

const Home = () => {
  const { data: me } = useQuery('user', () => memberInfoAPI())

  const router = useRouter()

  const [modal, setModal] = useState<boolean>(false)
  const [title, setTitle] = useState<string>('주류학개론')
  const [index, setIndex] = useState<number>(1)

  const [ref, inView] = useInView()

  const { data, fetchNextPage, refetch } = useInfiniteQuery(
    ['boards', index],
    ({ pageParam = 0 }) => getBoardsAPI(index, pageParam, 1),
    {
      getNextPageParam: (lastPage) => {
        return lastPage.nextPage
      },
    },
  )

  const mainData = data?.pages[0].data
  const isEmpty = data?.pages[0]?.length === 0

  const getData = (index: number) => {
    setIndex(index)
    refetch()
  }

  const handleModalClick = useCallback(() => {
    router.push('/loginsignup')
  }, [router])

  const handleModalClose = useCallback(() => {
    setModal(!modal)
  }, [modal])

  useEffect(() => {
    if (inView && !isEmpty) {
      fetchNextPage()
    }
  }, [inView, isEmpty, fetchNextPage])

  useEffect(() => {
    categories?.find((i) => {
      if (i.index === index) {
        setTitle(i.name)
      }
    })
  }, [index])

  useEffect(() => {
    console.log(me)
  }, [me])

  return (
    <>
      <Head>
        <title>알코홀릭</title>
      </Head>
      <Gnb
        isLoggedIn={me?.success}
        image={me?.data.image ? me.data.image : '/assets/profile_img.png'}
      />
      <section css={styles.container}>
        <Tabs defaultSelected={0} router={router} getData={getData}>
          {categories.map((category, index) => (
            <Tabs.Panel key={index} name={category.name}>
              <section css={styles.titleBlock}>
                <Title>{category.name}</Title>
                <Sentence size="sm">{category.description}</Sentence>
                <section css={styles.btnBlock}>
                  <button>최신순</button>
                  <button>인기순</button>
                </section>
              </section>
              {mainData?.length !== 0 ? (
                <section
                  onClick={() => {
                    if (!me?.success) {
                      setModal(!modal)
                    }
                  }}
                >
                  {mainData?.map((data: any, index: number) => (
                    <Content key={index} isLoggedIn={true} data={data} />
                  ))}
                </section>
              ) : (
                <NoContentsBlock
                  isLoggedIn={me?.success}
                  index={index}
                  title={title}
                />
              )}
            </Tabs.Panel>
          ))}
        </Tabs>
        <div ref={ref} />
        <ModalAlert
          title={'로그인 후에 이용할 수 있어요'}
          type={'confirm'}
          btnName="로그인"
          isOpen={modal}
          onClick={handleModalClick}
          onCancel={handleModalClose}
        />
      </section>
      <BottomBar isLoggedIn={me?.success} index={index} title={title} />
    </>
  )
}

export const getStaticProps = async () => {
  const queryClient = new QueryClient()
  await Promise.allSettled([
    queryClient.prefetchInfiniteQuery(['boards', 1], () => getBoardsAPI(1, 0)),
    queryClient.prefetchInfiniteQuery(['boards', 2], () => getBoardsAPI(2, 0)),
    queryClient.prefetchInfiniteQuery(['boards', 3], () => getBoardsAPI(3, 0)),
  ])
  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  }
}

export default Home
