import React, { useState, useEffect } from 'react'
import { useQuery } from 'react-query'
import Router from 'next/router'
import Image from 'next/image'

import Header from '@/components/Header'
import Sentence from '@/components/Sentence'
import Button from '@/components/Button'
import AccountInfo from '@/components/AccountInfo'
import ModalWithdrawal from '@/components/ModalWithdrawal'
import Backbutton from '@/components/BackButton'

import * as styles from '@/css/setting/settingInfoStyles'

const Info = () => {
  const { data: me } = useQuery(
    'user',
    async () => await fetch(`/api/member`).then((response) => response.json()),
  )
  const [modal, setModal] = useState(false)
  useEffect(() => {
    if (!me || !me.email) {
      Router.push('/')
    }
  }, [me])
  useEffect(() => {
    console.log(me)
    console.log(me.id)
  })
  return (
    <>
      {me && me.email && (
        <section>
          {me.provider === 'LOCAL' ? (
            <AccountInfo />
          ) : (
            <section>
              <Header title="계정정보" left={<Backbutton />} />
              <section css={styles.container}>
                <label>이메일</label>
                <div css={styles.emailBlock}>
                  <Sentence size="base">{me.email}</Sentence>
                  <Image
                    src={
                      me.provider === 'KAKAO'
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

export default Info
