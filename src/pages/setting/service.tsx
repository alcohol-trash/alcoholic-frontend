import Header from '@/components/Header'
import Backbutton from '@/components/BackButton'

import * as styles from '@/css/setting/settingServiceStyles'

const Service = () => {
  return (
    <>
      <Header title="고객센터" left={<Backbutton />} />
      <section css={styles.container}></section>
    </>
  )
}

export default Service
