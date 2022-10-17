import React, { useState, useCallback } from 'react'
import { useQuery } from 'react-query'
import { useForm } from 'react-hook-form'

import { changePwdAPI } from '@/api/user'
import { settingEditValidation } from '@/libs/validations/settingEditValidation'

import Header from '@/components/Header'
import BackButton from '@/components/BackButton'
import Sentence from '@/components/Sentence'
import TextField from '@/components/TextField'
import ValidateMessage from '@/components/ValidateMessage'
import Button from '@/components/Button'
import ModalAlert from '@/components/ModalAlert'

import * as styles from './styles'

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
    resolver: settingEditValidation(),
  })

  const handleChange = ({ name, value }: any) => {
    setValue(name, value, { shouldValidate: true })
  }

  const handleSubmitClick = async () => {
    const response = await changePwdAPI(me.data.id as string, {
      newPassword: getValues('newPassword'),
      password: getValues('password'),
    })
    if (response) {
      setModal(true)
      setModalTitle(response.data.message)
      if (response.data.success) {
        setModal(true)
        setModalTitle('정보가 수정되었습니다.')
      }
    }
  }

  const handleModal = useCallback(() => {
    setModal(!modal)
  }, [modal])

  return (
    <section>
      <Header
        title="계정정보"
        left={<BackButton />}
        right={
          <Button
            style={isValid ? 'modalLogin' : 'secondary'}
            disabled={!isValid}
            onClick={handleSubmit(handleSubmitClick)}
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
      <ModalAlert isOpen={modal} title={modalTitle} onClick={handleModal} />
    </section>
  )
}

export default AccountInfo
