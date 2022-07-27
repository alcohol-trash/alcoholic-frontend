import Header from '@/components/Header'
import Backbutton from '@/components/backbutton'

import * as styles from '@/css/setting/settingServiceStyles'

const Service = () => {
  return (
    <section css={styles.container}>
      <Header title="고객센터" left={<Backbutton />} />
    </section>
  )
}

export default Service
