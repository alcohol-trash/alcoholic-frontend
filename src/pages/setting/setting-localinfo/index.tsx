import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import Header from '@/components/Header'
import Button from '@/components/Button'
import AccountInfo from '@/components/accountinfo'
import ModalAlert from '@/components/Modal'
import ModalBlock from '@/components/ModalBlock'
import Checkbox from '@/components/Checkbox'

import * as styles from '@/css/setting/settingLocalInfoStyles'
import { getSettingTermsFormSchema } from '@/libs/validations/settingTermsValidation'

type FormTypes = {
  check: boolean
}

const LocalInfo = () => {
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
      <Header title="계정 정보" style="both">
        <Button style="secondary" align="center">
          수정
        </Button>
      </Header>
      <AccountInfo />
      <div css={styles.btnBlock}>
        <Button style="secondary" size="base" onClick={() => setModal(!modal)}>
          회원탈퇴
        </Button>
      </div>
      <ModalAlert
        title={`회원탈퇴`}
        btnName={'확인'}
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

export default LocalInfo
