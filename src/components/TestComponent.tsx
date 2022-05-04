import React from 'react'
import Image from 'next/image'
import touchIcon from '@/public/assets/apple-touch-icon.png'
import { useQuery } from 'react-query'
import { fetchTest } from '@/lib/api/test'

const Test = () => {
  const { isLoading, isError, data } = useQuery(['test'],
    () => fetchTest({
      dest: 'https://jsonplaceholder.typicode.com/posts/1',
      method: 'GET'
    }))

  if (isLoading) return <div>...loading</div>
  if (isError) return <div>...Error</div>
  if (!data) return <div>...loading</div>

  console.log('test', isLoading, isError, data)
  return (
    <div>
      <h1>절대경로, 이미지</h1>
      <Image src={touchIcon} />
    </div>
  )
}

export default Test
