import React, { useState, useEffect } from 'react'
import { useQuery } from 'react-query'
//import { GetServerSidePropsContext } from 'next'
import Router from 'next/router'
import Link from 'next/link'

import Header from '@/components/Header'
import BackButton from '@/components/Temp'
import ModalAlert from '@/components/ModalAlert'

import { MemberInfo } from '@/pages/api/member/info'
import * as styles from '@/css/setting/settingMainStyles'

const AUTH_TYPE = 'logout'
const Setting = () => {
  const [modal, setModal] = useState<boolean>(false)
  const [modalTitle, setModalTitle] = useState<string>('')

  const { data: me } = useQuery('user', MemberInfo)

  const handleLogout = async () => {
    const response = await fetch(`/api/auth/${AUTH_TYPE}`, {
      method: 'POST',
    })
    const data = await response.json()
    if (data.success) {
      Router.push('/')
    } else {
      setModal(true)
      setModalTitle(data.message)
    }
  }
  useEffect(() => {
    if (!me?.success) {
      Router.push('/')
    }
  }, [me])
  return (
    <>
      {me?.success && (
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

export const getServerSideProps = async () => {
  //쿠키 헤더 포함
  const data = await MemberInfo()
  return {
    props: { notes: data },
  }
}

export default Setting
