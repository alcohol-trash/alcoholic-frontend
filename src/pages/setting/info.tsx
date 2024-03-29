import React, { useState, useEffect } from 'react'
import { useQuery } from 'react-query'
import Router from 'next/router'
import Image from 'next/image'

import { memberInfoAPI } from '@/api/user'

import Header from '@/components/Header'
import Sentence from '@/components/Sentence'
import Button from '@/components/Button'
import AccountInfo from '@/components/AccountInfo'
import ModalWithdrawal from '@/components/ModalWithdrawal'
import BackButton from '@/components/BackButton'

import * as styles from '@/css/setting/settingInfoStyles'

const Info = () => {
  const { data: me } = useQuery('user', async () => await memberInfoAPI())

  const [modal, setModal] = useState(false)

  useEffect(() => {
    if (!me.data.id) {
      Router.push('/')
    }
  }, [me])

  return (
    <>
      {me?.data.id && (
        <section>
          {me.data.provider === 'LOCAL' ? (
            <AccountInfo />
          ) : (
            <section>
              <Header title="계정정보" left={<BackButton />} />
              <section css={styles.container}>
                <label>이메일</label>
                <div css={styles.emailBlock}>
                  <Sentence size="base">{me.data.email}</Sentence>
                  <Image
                    src={
                      me.data.provider === 'KAKAO'
                        ? '/assets/kakao.png'
                        : '/assets/google.png'
                    }
                    width={32}
                    height={32}
                  />
                </div>
              </section>
            </section>
          )}
          <div css={styles.btnBlock}>
            <Button
              style="secondary"
              size="base"
              onClick={() => setModal(!modal)}
            >
              회원탈퇴
            </Button>
          </div>
          <ModalWithdrawal isOpen={modal} onClick={() => setModal(!modal)} />
        </section>
      )}
    </>
  )
}

export default React.memo(Info)
