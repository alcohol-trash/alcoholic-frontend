import Homebar from '@/components/homebar'
import * as styles from './styles'

const settingMain = () => {
  return (
    <section css={styles.container}>
      <Homebar />
      <ul>
        <li>계정 정보</li>
        <li>프로필 편집</li>
        <li>고객센터</li>
        <li>이용약관</li>
      </ul>
    </section>
  )
}

export default settingMain
