import Header from '@/components/Header'
import Backbutton from '@/components/backbutton'

import * as styles from '@/css/setting/settingTermsStyles'

const Terms = () => {
  return (
    <section css={styles.container}>
      <Header title="이용약관" left={<Backbutton />} />
      <ul css={styles.list}>
        <li>서비스 이용약관</li>
        <li>개인정보 처리방침</li>
      </ul>
    </section>
  )
}

export default Terms
