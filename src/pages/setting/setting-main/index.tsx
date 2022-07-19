import Router from 'next/router'

import Header from '@/components/Header'
import * as styles from './styles'

const Setting = () => {
  const handleLogout = () => {
    Router.push('/')
  }
  return (
    <section css={styles.container}>
      <Header title="설정" />
      <ul css={styles.list}>
        <li>계정 정보</li>
        <li css={styles.border}>프로필 편집</li>
        <li>고객센터</li>
        <li css={styles.border}>이용약관</li>
        <li onClick={handleLogout}>로그아웃</li>
      </ul>
    </section>
  )
}

export default Setting
