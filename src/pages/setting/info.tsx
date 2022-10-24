import React, { useState, useEffect, useCallback } from 'react'
import Router from 'next/router'

import { useUserQuery } from '@/hooks/useUserQuery'

import AccountInfo from '@/components/AccountInfo'
import SocialInfo from '@/components/SocialInfo'
import Button from '@/components/Button'
import ModalWithdrawal from '@/components/ModalWithdrawal'

import * as styles from '@/css/setting/settingInfoStyles'

const Info = () => {
  const { data: me } = useUserQuery()

  const [modal, setModal] = useState(false)

  const handleModal = useCallback(() => {
    setModal(!modal)
  }, [modal])

  useEffect(() => {
    if (!me?.success) {
      Router.push('/')
    }
  }, [me])

  return (
    <>
      {me?.success && (
        <section>
          {me.data.provider === 'LOCAL' ? <AccountInfo /> : <SocialInfo />}
          <div css={styles.btnBlock}>
            <Button style="secondary" size="base" onClick={handleModal}>
              회원탈퇴
            </Button>
          </div>
          <ModalWithdrawal isOpen={modal} onClick={handleModal} />
        </section>
      )}
    </>
  )
}

export default React.memo(Info)
