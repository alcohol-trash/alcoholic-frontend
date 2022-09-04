import Header from '@/components/Header'
import BackButton from '@/components/BackButton'

import * as styles from '@/css/setting/settingTermsStyles'

const Terms = () => {
  return (
    <>
      <Header title="이용약관" left={<BackButton />} />
      <section css={styles.container}>
        <ul css={styles.list}>
          <li>서비스 이용약관</li>
          <li>개인정보 처리방침</li>
        </ul>
      </section>
    </>
  )
}

export default Terms
