import React from 'react'
import { useQuery } from 'react-query'
import Router, { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import * as R from 'ramda'

import Header from '@/components/Header'
import Button from '@/components/Button'
import MyProfile from '@/components/MyProfile'
import Tabs from '@/components/Tabs'
import UserContentCard from '@/components/UserContentCard'

import * as styles from '@/css/my/myPageStyles'
import { mockWriteData, mockCommentData, menus } from '@/libs/mocks/mockData'

const MyPage = () => {
  const { data: me } = useQuery(
    'user',
    async () => await fetch(`/api/member`).then((response) => response.json()),
  )
  const router = useRouter()

  return (
    <>
      {me?.data.id && (
        <div css={styles.container}>
          <Header
            left={
              <Link href="/">
                <Image src="/assets/logo.png" width={74} height={20} />
              </Link>
            }
            right={
              <Button style="secondary" onClick={() => Router.push('/setting')}>
                설정
              </Button>
            }
          />

          <div>
            <MyProfile image={me.data.image} nickname={me.data.nickname} />
          </div>

          <Tabs defaultSelected={0} router={router}>
            {menus.map((menu, index) => (
              <Tabs.Panel key={index} name={menu.name} count={menu.count}>
                {index === 0 ? (
                  !R.isEmpty(mockWriteData) ? (
                    mockWriteData.map((data, index) => (
                      <UserContentCard key={index} data={data} />
                    ))
                  ) : (
                    <div css={styles.noData}>
                      <span>아직 작성한 글이 없어요</span>
                      <Button
                        size="xs"
                        align="center"
                        onClick={() => Router.push('/')}
                      >
                        글 업로드하기
                      </Button>
                    </div>
                  )
                ) : !R.isEmpty(mockCommentData) ? (
                  mockCommentData?.map((data, index) => (
                    <UserContentCard key={index} data={data} />
                  ))
                ) : (
                  <div css={styles.noData}>
                    <span>아직 작성한 댓글이 없어요</span>
                    <Button
                      size="xs"
                      align="center"
                      onClick={() => Router.push('/')}
                    >
                      글 탐색하기
                    </Button>
                  </div>
                )}
              </Tabs.Panel>
            ))}
          </Tabs>
        </div>
      )}
    </>
  )
}

export default React.memo(MyPage)
