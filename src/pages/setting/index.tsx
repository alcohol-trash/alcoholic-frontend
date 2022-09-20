import React, { useState, useEffect } from 'react'
import { useQuery } from 'react-query'
import Router from 'next/router'
import Link from 'next/link'

import { memberInfoAPI, logoutAPI } from '@/api/user'

import Header from '@/components/Header'
import BackButton from '@/components/BackButton'
import ModalAlert from '@/components/ModalAlert'

import * as styles from '@/css/setting/settingMainStyles'

const Setting = () => {
  const { data: me } = useQuery('user', async () => await memberInfoAPI())

  const [modal, setModal] = useState<boolean>(false)
  const [modalTitle, setModalTitle] = useState<string>('')

  const handleLogout = async () => {
    const response = await logoutAPI()
    if (response.data.success) {
      Router.push('/')
    } else {
      setModal(true)
      setModalTitle(response.data.message)
    }
  }
  useEffect(() => {
    if (!me?.success) {
      Router.push('/')
    }
  }, [me])
  return (
    <>
      {me?.data.id && (
        <section>
          <Header title="설정" left={<BackButton />} />
          <section css={styles.container}>
            <ul css={styles.list}>
              <Link href="/setting/info">
                <li>계정 정보</li>
              </Link>
              <Link href="/setting/profile">
                <li css={styles.border}>프로필 편집</li>
              </Link>
              <Link href="/setting/service">
                <li>고객센터</li>
              </Link>
              <Link href="/setting/terms">
                <li css={styles.border}>이용약관</li>
              </Link>
              <li css={styles.liColor} onClick={handleLogout}>
                로그아웃
              </li>
            </ul>
            <ModalAlert
              title={modalTitle}
              isOpen={modal}
              onClick={() => setModal(!modal)}
            />
          </section>
        </section>
      )}
    </>
  )
}

export default React.memo(Setting)
