import Router from 'next/router'
import Link from 'next/link'

import Header from '@/components/Header'
import * as styles from '@/css/setting/settingMainStyles'

const Setting = () => {
  const handleLogout = () => {
    Router.push('/')
  }
  return (
    <section css={styles.container}>
      <Header title="설정" style="default" />
      <ul css={styles.list}>
        <Link href="/setting/setting-info">
          <li>계정 정보</li>
        </Link>
        <Link href="/setting/setting-profile">
          <li css={styles.border}>프로필 편집</li>
        </Link>
        <Link href="/setting/setting-service">
          <li>고객센터</li>
        </Link>
        <Link href="/setting/setting-terms">
          <li css={styles.border}>이용약관</li>
        </Link>
        <li onClick={handleLogout}>로그아웃</li>
      </ul>
    </section>
  )
}

export default Setting
