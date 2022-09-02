import React, { useEffect, useState } from 'react'
import {
  dehydrate,
  QueryClient,
  useInfiniteQuery,
  useQuery,
  useQueryClient,
} from 'react-query'
import { useInView } from 'react-intersection-observer'
import { GetServerSidePropsContext } from 'next'
import { useRouter } from 'next/router'

import Title from '@/components/Title'
import Sentence from '@/components/Sentence'
import Tabs from '@/components/Tabs'
import Feed from '@/components/Feed'
import Nocontentsblock from '@/components/NoContentsBlock'

import { Boards } from './api/boards'
import { categories } from '@/libs/data'
import * as styles from '@/css/home'

interface BoardsProps {
  content: string
  createdData: string
  heartCheck: boolean
  heartCount: number
  images: any
  seq: number
  title: string
  updatedDate: string
  writer: string
}

export default function Test() {
  const router = useRouter()
  const [ref, inView] = useInView()
  const [param, setParam] = useState(0)
  const { data, fetchNextPage } = useInfiniteQuery<BoardsProps[]>(
    'boards',
    ({ pageParam = 0 }) => Boards(1, pageParam, 3),
    {
      getNextPageParam: () => {
        setParam(param + 1)
        return param
      },
    },
  )
  const mainData = data?.pages.flat()
  //   const isEmpty = data?.pages[0]?.length === 0
  //   const hasMorePosts = !isEmpty
  useEffect(() => {
    if (inView) {
      fetchNextPage() //다음 페이지 데이터를 호출
    }
  }, [fetchNextPage, inView])

  const [modal, setModal] = useState<boolean>(false)
  const handleBtnClick = async () => {
    //
  }
  return (
    <>
      {mainData && (
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
              {mainData?.length !== 0 ? (
                <section>
                  {mainData?.map((data, index) => (
                    <Feed key={index} data={data} />
                  ))}
                </section>
              ) : (
                <Nocontentsblock isLoggedIn={false} />
              )}
            </Tabs.Panel>
          ))}
        </Tabs>
      )}
    </>
  )
}

export const getStaticProps = async () => {
  const queryClient = new QueryClient()
  await queryClient.prefetchInfiniteQuery('boards', await Boards())
  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  }
}
