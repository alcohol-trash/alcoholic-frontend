import React from 'react'
import Tabbar from '@/components/tabbar'
import NoticeTitle from '@/components/noticetitle'
import Category from '@/components/category'
import Feed from '@/components/feed'
import { HomePage } from '@/css/home'

const Main = () => {
  return (
    <>
      <section>
        <NoticeTitle
          title="주류학개론"
          description="술에 대한 정보, 리뷰를 올려주세요."
        />
        <section css={HomePage.TopContainer}>
          {CATEGORY_DUMMY.map((data) => (
            <Category content={data.content} key={data.id} />
          ))}
        </section>
        <section css={HomePage.BottomContainer}>
          <Feed />
          <Feed />
          <Feed />
        </section>
      </section>
      <Tabbar />
    </>
  )
}

export default Main

const CATEGORY_DUMMY = [
  {
    id: 1,
    content: '최신순',
  },
  {
    id: 2,
    content: '추천순',
  },
]
