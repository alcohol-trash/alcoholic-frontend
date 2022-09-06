import React, { useState } from 'react'
import { useQuery } from 'react-query'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import Header from '@/components/Header'
import BackButton from '@/components/BackButton'
import Sentence from '@/components/Sentence'
import TextField from '@/components/TextField'
import ValidateMessage from '@/components/ValidateMessage'
import Button from '@/components/Button'
import ModalAlert from '@/components/ModalAlert'
import ToastsAlerts from '@/components/ToastsAlert'
import { Toasts } from '@/components/ToastsAlert'

import * as styles from './styles'
import { getSettingEditFormSchema } from '@/libs/validations/settingEditValidation'

type FormTypes = {
  password: string
  newPassword: string
  newPasswordConfirm: string
}

const AccountInfo = () => {
  const { data: me } = useQuery(
    'user',
    async () => await fetch(`/api/member`).then((response) => response.json()),
  )
  const [modal, setModal] = useState<boolean>(false)
  const [modalTitle, setModalTitle] = useState<string>('')
  const {
    register,
    setValue,
    getValues,
    formState: { isValid, errors },
    handleSubmit,
  } = useForm<FormTypes>({
    resolver: yupResolver(getSettingEditFormSchema),
  })
  const handleChange = ({ name, value }: any) => {
    setValue(name, value, { shouldValidate: true })
  }
  const handleBtnClick = async () => {
    const response = await fetch(`/api/member/change/${me.data.id}`, {
      method: 'PUT',
      body: JSON.stringify({
        newPassword: getValues('newPassword'),
        password: getValues('password'),
      }),
    })
    const data = await response.json()
    if (data) {
      setModal(true)
      setModalTitle(data.message)
      if (data.success) {
        Toasts('정보가 수정되었습니다')
      }
    }
  }
  return (
    <section>
      <Header
        title="계정정보"
        left={<BackButton />}
        right={
          <Button
            style={isValid ? 'modalLogin' : 'secondary'}
            disabled={!isValid}
            onClick={handleSubmit(handleBtnClick)}
          >
            수정
          </Button>
        }
      />
      <section css={styles.container}>
        <label>이메일</label>
        <div css={styles.infoBlock}>
          <Sentence size="base">{me.data.email}</Sentence>
        </div>
        <label>아이디</label>
        <div css={styles.infoBlock}>
          <Sentence size="base">{me.data.id}</Sentence>
        </div>
        <form>
          <div>
            <div css={styles.inputBlock}>
              <label>현재 비밀번호</label>
              <TextField
                placeholder="비밀번호를 입력해주세요."
                type="password"
                {...register('password')}
                onChange={handleChange}
              />
              {errors?.password && (
                <ValidateMessage result={errors?.password} />
              )}
            </div>
            <div css={styles.inputBlock}>
              <label>새 비밀번호</label>
              <TextField
                placeholder="비밀번호를 입력해주세요."
                type="password"
                {...register('newPassword')}
                onChange={handleChange}
              />
              {errors?.newPassword && (
                <ValidateMessage result={errors?.newPassword} />
              )}
            </div>
            <div css={styles.inputBlock}>
              <label>새 비밀번호 확인</label>
              <TextField
                placeholder="비밀번호를 다시 입력해주세요."
                type="password"
                {...register('newPasswordConfirm')}
                onChange={handleChange}
              />
              {errors?.newPasswordConfirm && (
                <ValidateMessage result={errors?.newPasswordConfirm} />
              )}
            </div>
          </div>
        </form>
      </section>
      <ModalAlert
        isOpen={modal}
        title={modalTitle}
        onClick={() => setModal(!modal)}
      />
      <ToastsAlerts />
    </section>
  )
}

export default AccountInfo
