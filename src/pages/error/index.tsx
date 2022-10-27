import React from 'react'

import { useUserQuery } from '@/hooks/useUserQuery'

import Sentence from '@/components/Sentence'
import TopBar from '@/components/TopBar'

import * as styles from '@/css/error/errorStyles'

const Error = () => {
  const { data: me } = useUserQuery()

  return (
    <>
      <TopBar
        isLoggedIn={me?.success}
        image={me?.data.image ? me.data.image : '/assets/profile_img.png'}
      />
      <section css={styles.container}>
        <Sentence size="base">네트워크 오류</Sentence>
      </section>
    </>
  )
}

export default React.memo(Error)
