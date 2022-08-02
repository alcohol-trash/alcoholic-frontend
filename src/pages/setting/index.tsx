import React, { useState } from 'react'
import Router from 'next/router'
import Link from 'next/link'

import Header from '@/components/Header'
import Backbutton from '@/components/backbutton'
import ModalAlert from '@/components/ModalAlert'

import * as styles from '@/css/setting/settingMainStyles'

const AUTH_TYPE = 'logout'
const Setting = () => {
  const [modal, setModal] = useState<boolean>(false)
  const [modalTitle, setModalTitle] = useState<string>('')
  const handleLogout = async () => {
    const response = await fetch(`/api/auth/${AUTH_TYPE}`, {
      method: 'POST',
    })
    const data = await response.json()
    console.log(data.message)
    if (data.success) {
      Router.push('/')
    } else {
      setModal(true)
      setModalTitle(data.message)
    }
  }
  return (
    <section css={styles.container}>
      <Header title="설정" left={<Backbutton />} />
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
  )
}

export default Setting
