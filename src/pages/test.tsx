import React from 'react'

const AUTH_TYPE = 'login'

export default function Test() {
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
    const response = await fetch(`/api/member`)
    const data = await response.json()
    console.log(data)
  }
  return (
    <>
      <button onClick={onClick1}>테스트1</button>
      <button onClick={onClick2}>테스트2</button>
      <button onClick={onClick3}>로그인 테스트</button>
      <button onClick={onClick4}>사용자 정보 조회 테스트</button>
    </>
  )
}
