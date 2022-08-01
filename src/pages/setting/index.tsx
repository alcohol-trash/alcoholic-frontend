import Router from 'next/router'
import Link from 'next/link'

import Header from '@/components/Header'
import Backbutton from '@/components/backbutton'

import * as styles from '@/css/setting/settingMainStyles'

const Setting = () => {
  const handleLogout = () => {
    Router.push('/')
  }
  return (
    <section css={styles.container}>
      <Header title="설정" left={<Backbutton />} />
      <ul css={styles.list}>
        <Link href="/setting/info">
          <li>계정 정보</li>
        </Link>
        <Link href="/setting/profile">
          <li css={styles.border}>프로필 편집</li>
        </Link>
        <Link href="/setting/service">
          <li>고객센터</li>
        </Link>
        <Link href="/setting/terms">
          <li css={styles.border}>이용약관</li>
        </Link>
        <li css={styles.liColor} onClick={handleLogout}>
          로그아웃
        </li>
      </ul>
    </section>
  )
}

export default Setting
