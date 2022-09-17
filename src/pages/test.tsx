import React from 'react'

const AUTH_TYPE = 'login'
const LOGOUT = 'logout'
export default function Test() {
  const onClick1 = async () => {
    const response = await fetch(`/api/board`, {
      method: 'POST',
      headers: {
        cookie: `${document.cookie}`,
      },
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
    const response = await fetch(`/api/board`, {
      method: 'POST',
      headers: {
        cookie: `${document.cookie}`,
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
    console.log(document.cookie)
  }
  const onClick4 = async () => {
    const response = await fetch(`/api/member`, {
      headers: {
        cookie: `${document.cookie}`,
      },
    })
    const data = await response.json()
    console.log(data)
  }
  const onClick5 = async () => {
    const response = await fetch(`/api/auth/${LOGOUT}`, {
      method: 'POST',
      headers: {
        cookie: `${document.cookie}`,
      },
    })
    const data = await response.json()
    console.log(data)
  }
  const onClick6 = async () => {
    const response = await fetch(`/api/heart/board/1`, {
      method: 'POST',
      headers: {
        cookie: `${document.cookie}`,
      },
    })
    const data = await response.json()
    console.log(data)
  }
  const onClick7 = async () => {
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
    const response = await fetch('https://api.alcoholic.ml/api/board', {
      method: 'POST',
      headers: {
        cookie: `${document.cookie}`,
      },
      body: formData,
    })
    const data = await response.json()
    console.log(data)
  }
  return (
    <>
      <button onClick={onClick1}>테스트1</button>
      <button onClick={onClick2}>테스트2</button>
      <button onClick={onClick3}>로그인 테스트</button>
      <button onClick={onClick4}>사용자 정보 조회 테스트</button>
      <button onClick={onClick5}>로그아웃 테스트</button>
      <button onClick={onClick6}>게시물 좋아요 테스트</button>
      <button onClick={onClick7}>게시물 작성 테스트</button>
    </>
  )
}
