import React from 'react'
import Router, { useRouter } from 'next/router'
import Link from 'next/link'
import * as R from 'ramda'
import { FaUserCircle as UserFace } from 'react-icons/fa'

import { mockWriteData, mockCommentData, myMenus } from '@/libs/mocks/mockData'

import Button from '@/components/Button'
import Tabs from '@/components/Tabs'
import UserContentCard from '@/components/UserContentCard'

import * as styles from '@/css/my/myPageStyles'

const MyPage = () => {
  const router = useRouter()

  const handleProfileClick = () => {
    // TODO: 프로필 편집으로 이동
    Router.push('/')
  }

  const handleUploadClick = () => {
    // TODO: 글 업로드로 이동
    Router.push('/')
  }

  const handleHomeClick = () => {
    // TODO: 홈으로 이동
    Router.push('/')
  }

  return (
    <div css={styles.container}>
      {/* nav */}
      <div css={styles.nav}>
        <Link href="/">
          <a>
            <img src="/assets/logo.png" width={74} />
          </a>
        </Link>
        {/* TODO: 설정 이동 */}
        <Link href="">
          <a>설정</a>
        </Link>
      </div>
      {/* profile image */}
      <div css={styles.profile}>
        {/* TODO: 컴포넌트로 변경 예정 */}
        <div css={styles.img}>
          <UserFace size={80} />
        </div>
        <div css={styles.name}>구루미구루미</div>
        <Button onClick={handleProfileClick} align="center" size="xs">
          프로필 편집
        </Button>
      </div>
      {/* list */}
      <Tabs defaultSelected={0} router={router}>
        {myMenus.map((menu, index) => (
          <Tabs.Panel key={index} name={menu.name} count={menu.count}>
            {index === 0 ? (
              !R.isEmpty(mockWriteData) ? (
                mockWriteData.map((data, index) => (
                  <UserContentCard key={index} data={data} />
                ))
              ) : (
                <div css={styles.noData}>
                  <span>아직 작성한 글이 없어요</span>
                  <Button size="xs" align="center" onClick={handleUploadClick}>
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
                <Button size="xs" align="center" onClick={handleHomeClick}>
                  글 탐색하기
                </Button>
              </div>
            )}
          </Tabs.Panel>
        ))}
      </Tabs>
    </div>
  )
}

export default React.memo(MyPage)
