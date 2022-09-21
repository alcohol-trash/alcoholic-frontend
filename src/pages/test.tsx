import React from 'react'
import { dehydrate, QueryClient, useInfiniteQuery, useQuery } from 'react-query'
import { loginAPI, logoutAPI, memberInfoAPI } from '@/api/user'
import { heartAPI, makeBoardAPI, getBoardAPI, getBoardsAPI } from '@/api/board'

export default function Test() {
  const onClick1 = async () => {
    const response = await loginAPI({
      id: 'test1234',
      password: 'password1234!',
    })
    console.log(response.data)
  }
  const onClick2 = async () => {
    const response = await memberInfoAPI()
    console.log(response.data)
  }
  const onClick3 = async () => {
    const response = await logoutAPI()
    console.log(response.data)
  }
  const onClick4 = async () => {
    const response = await heartAPI(1, 'POST')
    console.log(response.data)
  }
  const onClick5 = async () => {
    const formData = new FormData()
    formData.append('file', '')
    const variables = [
      {
        category: 1,
        title: '주류학개론',
        content: '알콜홀릭 게시물 테스트 중!',
      },
    ]
    formData.append(
      'json',
      new Blob([JSON.stringify(variables)], { type: 'application/json' }),
    )
    const response = await makeBoardAPI(formData)
    console.log(response.data)
  }
  const onClick6 = async () => {
    const response = await getBoardAPI(1)
    console.log(response.data)
  }
  const onClick7 = async () => {
    const response = await getBoardsAPI(1)
    console.log(response.data)
  }
  return (
    <>
      <button onClick={onClick1}>로그인 테스트</button>
      <button onClick={onClick2}>사용자 정보 조회 테스트</button>
      <button onClick={onClick3}>로그아웃 테스트</button>
      <button onClick={onClick4}>게시물 좋아요 테스트</button>
      <button onClick={onClick5}>게시물 작성 테스트</button>
      <button onClick={onClick6}>특정 게시물 불러오기 테스트</button>
      <button onClick={onClick7}>게시물 불러오기</button>
    </>
  )
}

export const getStaticProps = async () => {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery('boards', () => getBoardsAPI(1))
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}
