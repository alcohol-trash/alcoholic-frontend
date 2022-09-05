import React, { useEffect, useState } from 'react'
import {
  dehydrate,
  QueryClient,
  useInfiniteQuery,
  useQuery,
  useQueryClient,
} from 'react-query'
import { useInView } from 'react-intersection-observer'
//import { GetServerSidePropsContext } from 'next'
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

const AUTH_TYPE = 'login'

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
  const onClick1 = async () => {
    const response = await fetch(`/api/board/`, {
      method: 'POST',
      body: JSON.stringify({
        category: 1,
        content: '테스트 내용',
        title: '테스트 제목',
      }),
    })
    const data = await response.json()
    console.log('테스트1' + data)
  }
  const onClick2 = async () => {
    const formData = new FormData()
    formData.append('category', '1')
    formData.append('content', '두번째 테스트 내용')
    formData.append('title', '두번째 테스트 제목')
    const response = await fetch(`/api/board/`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
      },
      body: formData,
    })
    const data = await response.json()
    console.log('테스트2' + data)
  }
  const onClick3 = async () => {
    const response = await fetch(`/api/auth/${AUTH_TYPE}`, {
      method: 'POST',
      body: JSON.stringify({
        id: 'test1234',
        password: 'password1234!',
      }),
    })
    const data = await response.json()
    console.log(data)
  }
  const onClick4 = async () => {
    const response = await fetch(`/api/member/info`)
    const data = await response.json()
    console.log(data)
  }
  return (
    <>
      <button onClick={onClick1}>테스트1</button>
      <button onClick={onClick2}>테스트2</button>
      <button onClick={onClick3}>로그인 테스트</button>
      <button onClick={onClick4}>사용자 정보 조회 테스트</button>
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
                <div>테스트</div>
              )}
            </Tabs.Panel>
          ))}
        </Tabs>
      )}
    </>
  )
}

// export const getStaticProps = async () => {
//   const queryClient = new QueryClient()
//   await queryClient.prefetchInfiniteQuery('boards', await Boards())
//   return {
//     props: {
//       dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
//     },
//   }
// }
export const getServerSideProps = async (
  context: GetServerSidePropsContext,
) => {
  const cookie = context.req ? context.req.headers.cookie : ''
  const response = await fetch(`/api/member/info`, {
    headers: {
      cookie: `${cookie}`,
    },
  })
  const data = await response.json()
  if (!data) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }
  return {
    props: {},
  }
}