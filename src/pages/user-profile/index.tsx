import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import * as R from 'ramda'
import { FaUserCircle as UserFace } from 'react-icons/fa'

import { mockWriteData, mockCommentData, menus } from '@/libs/mocks/mockData'

import Tabs from '@/components/Tabs'
import UserContentCard from '@/components/UserContentCard'

import * as styles from '@/css/user-profile/userProfilePageStyles'

const UserProfile = () => {
  const router = useRouter()

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
      </div>
      {/* list */}
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
                </div>
              )
            ) : !R.isEmpty(mockCommentData) ? (
              mockCommentData?.map((data, index) => (
                <UserContentCard key={index} data={data} />
              ))
            ) : (
              <div css={styles.noData}>
                <span>아직 작성한 댓글이 없어요</span>
              </div>
            )}
          </Tabs.Panel>
        ))}
      </Tabs>
    </div>
  )
}

export default React.memo(UserProfile)
