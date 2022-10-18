import React, { useState, useEffect, useCallback } from 'react'
import { useQuery, useMutation, useQueryClient } from 'react-query'
import Router from 'next/router'
import Link from 'next/link'
import { AxiosError } from 'axios'

import User from '@/libs/interfaces/user'
import { memberInfoAPI, logoutAPI } from '@/api/user'

import Header from '@/components/Header'
import BackButton from '@/components/BackButton'
import ModalAlert from '@/components/ModalAlert'

import * as styles from '@/css/setting/settingMainStyles'

const Setting = () => {
  const queryClient = useQueryClient()

  const { data: me } = useQuery('user', async () => await memberInfoAPI())

  const [modal, setModal] = useState<boolean>(false)
  const [modalTitle, setModalTitle] = useState<string>('')
  const mutation = useMutation<User, AxiosError>(logoutAPI, {
    onSuccess: (response) => {
      if (response.success) {
        queryClient.setQueryData('user', null)
        Router.push('/')
      } else {
        console.log(response.data)
        setModal(true)
        setModalTitle(response.data.message)
      }
    },
  })

  const handleLogout = useCallback(() => {
    mutation.mutate()
  }, [mutation])

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
              onClick={handleModal}
            />
          </section>
        </section>
      )}
    </>
  )
}

export default React.memo(Setting)
