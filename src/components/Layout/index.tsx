import React from 'react'
import Tabbar from '@/components/tabbar'
import Gnb from '@/components/gnb'
//import NoticeTitle from '@/components/noticetitle'
//import Category from '@/components/category'
//import Feed from '@/components/feed'
//import { HomePage } from '@/css/home'

const Layout = ({ children }: any) => {
  return (
    <>
      <Gnb />
      <section>
        <main>{children}</main>
      </section>
      <Tabbar />
    </>
  )
}

export default Layout
