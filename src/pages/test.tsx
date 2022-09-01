import React, { useEffect, useState } from 'react'
import {
  dehydrate,
  QueryClient,
  useInfiniteQuery,
  useQuery,
  useQueryClient,
} from 'react-query'
import { useInView } from 'react-intersection-observer'
import { Boards } from './api/boards'
import { Categories } from './api/board-categories'
import Tabs from '@/components/Tabs'
import Title from '@/components/Title'
import Sentence from '@/components/Sentence'
import Nocontentsblock from '@/components/NoContentsBlock'
import Feed from '@/components/Feed'
import { useRouter } from 'next/router'
import { MemberInfo } from './api/member/info'
import { GetServerSidePropsContext } from 'next'
type CategoriesProps = {
  name: string
  seq: number
}
interface ImageProps {
  seq: number
  url: string
}
interface BoardsProps {
  content: string
  createdData: string
  heartCheck: boolean
  heartCount: number
  images: ImageProps[]
  seq: number
  title: string
  updatedDate: string
  writer: string
}

export default function Test({ categories }: any) {
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
  const boards = data?.pages.flat()
  //   const isEmpty = data?.pages[0]?.length === 0
  //   const hasMorePosts = !isEmpty
  useEffect(() => {
    if (inView) {
      fetchNextPage() //다음 페이지 데이터를 호출
    }
  }, [fetchNextPage, inView])
  return (
    <>
      {boards && (
        <Tabs defaultSelected={0} router={router}>
          {categories.data.map((category: CategoriesProps, index: any) => (
            <Tabs.Panel key={index} name={category.name}>
              <section>
                <Title>{category.name}</Title>
                <Sentence size="sm">{category.name}</Sentence>
              </section>
              {boards.length !== 0 ? (
                <section>
                  {boards.map((data: BoardsProps, index: any) => (
                    <Feed key={index} data={data} />
                  ))}
                  <div ref={ref} />
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
  //const queryClient = new QueryClient()
  //await queryClient.prefetchQuery('boards', await Boards())
  const categories = await Categories()
  return {
    props: {
      //dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
      categories,
    },
  }
}
