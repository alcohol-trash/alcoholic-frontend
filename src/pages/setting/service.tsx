import React from 'react'
import Header from '@/components/Header'
import BackButton from '@/components/BackButton'

import * as styles from '@/css/setting/settingServiceStyles'

const Service = () => {
  return (
    <>
      <Header title="고객센터" left={<BackButton />} />
      <section css={styles.container}></section>
    </>
  )
}

export default React.memo(Service)
