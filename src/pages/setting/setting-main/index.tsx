import Header from '@/components/Header'
import * as styles from './styles'

const Setting = () => {
  return (
    <section css={styles.container}>
      <Header title="설정" />
      <ul>
        <li>계정 정보</li>
        <li>프로필 편집</li>
        <li>고객센터</li>
        <li>이용약관</li>
      </ul>
    </section>
  )
}

export default Setting
