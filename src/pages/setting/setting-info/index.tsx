import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import Image from 'next/image'

import Header from '@/components/Header'
import Sentence from '@/components/Sentence'
import Button from '@/components/Button'
import ModalAlert from '@/components/Modal'
import ModalBlock from '@/components/ModalWithdrawalBlock'
import Checkbox from '@/components/Checkbox'
import AccountInfo from '@/components/accountinfo'

import * as styles from '@/css/setting/settingInfoStyles'
import { getSettingTermsFormSchema } from '@/libs/validations/settingTermsValidation'

type FormTypes = {
  check: boolean
}
const Info = () => {
  const [local, setLocal] = useState(false)
  const [modal, setModal] = useState(false)
  const {
    register,
    formState: { isValid },
  } = useForm<FormTypes>({
    mode: 'onChange',
    resolver: yupResolver(getSettingTermsFormSchema),
  })
  return (
    <section css={styles.container}>
      <Header title="계정정보" style="left" />
      <label>이메일</label>
      <div css={styles.emailBlock}>
        <Sentence size="base">alcoholic@kakao.com</Sentence>
        {!local && <Image src="/assets/kakao.png" width={32} height={32} />}
      </div>
      {local && <AccountInfo />}
      <Button style="secondary" size="base" onClick={() => setModal(!modal)}>
        회원탈퇴
      </Button>
      <ModalAlert
        title={`회원탈퇴`}
        btnName={'확인'}
        btnProp={isValid}
        width={375}
        height={462}
        type={'confirm'}
        location={'bottom'}
        isOpen={modal}
        onClick={() => setModal(!modal)}
      >
        <ModalBlock />
        <Checkbox
          value={true}
          {...register('check')}
          label="모든 내용을 확인했으며 정보 삭제에 동의합니다."
        />
      </ModalAlert>
    </section>
  )
}

export default Info
