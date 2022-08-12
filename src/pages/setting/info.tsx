import React, { useState } from 'react'
import { useQuery } from 'react-query'
//import { GetServerSidePropsContext } from 'next'
import Image from 'next/image'

import Header from '@/components/Header'
import Sentence from '@/components/Sentence'
import Button from '@/components/Button'
import AccountInfo from '@/components/accountinfo'
import ModalWithdrawal from '@/components/ModalWithdrawal'
import Backbutton from '@/components/backbutton'

import * as styles from '@/css/setting/settingInfoStyles'

const Info = () => {
  const { data: me } = useQuery(
    'user',
    async () =>
      await fetch(`/api/member/info`).then((response) => response.json()),
  )
  const [modal, setModal] = useState(false)
  return (
    <>
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
        <Button style="secondary" size="base" onClick={() => setModal(!modal)}>
          회원탈퇴
        </Button>
      </div>
      <ModalWithdrawal isOpen={modal} onClick={() => setModal(!modal)} />
    </>
  )
}

// 이후 토큰 추가 예정
// export const getServerSideProps = async (
//   context: GetServerSidePropsContext,
// ) => {
//   const cookie = context.req ? context.req.headers.cookie : ''
//   // axios.defaults.headers.Cookie = '';
//   // if (context.req && cookie) {
//   //   fetch.defaults.headers.Cookie = cookie;
//   // }
//   console.log(cookie)
//   const response = await fetch(`/api/member/${TYPE}`)
//   const data = await response.json()
//   if (!data) {
//     return {
//       redirect: {
//         destination: '/',
//         permanent: false,
//       },
//     }
//   }
//   return {
//     props: {},
//   }
// }

export default Info
