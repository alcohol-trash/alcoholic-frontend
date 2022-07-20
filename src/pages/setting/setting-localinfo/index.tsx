import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import Header from '@/components/Header'
import Sentence from '@/components/Sentence'
import TextField from '@/components/TextField'
import Button from '@/components/Button'
import ModalAlert from '@/components/Modal'
import ValidateMessage from '@/components/ValidateMessage'

import * as styles from '@/css/setting/settingLocalInfoStyles'
import { getSettingEditFormSchema } from '@/libs/validations/settingEditValidation'

type FormTypes = {
  password: string
  passwordConfirm: string
}

const LocalInfo = () => {
  const [modal, setModal] = useState(false)
  const {
    register,
    setValue,
    formState: { isValid, errors },
    handleSubmit,
  } = useForm<FormTypes>({
    resolver: yupResolver(getSettingEditFormSchema),
  })
  const handleChange = ({ name, value }: any) => {
    setValue(name, value, { shouldValidate: true })
  }
  const handleBtnClick = (data: FormTypes) => {
    console.log(data)
  }
  return (
    <section css={styles.container}>
      <Header title="계정 정보" style="both">
        <Button style="secondary" align="center">
          수정
        </Button>
      </Header>
      <label>이메일</label>
      <div css={styles.infoBlock}>
        <Sentence size="base">alcoholic@kakao.com</Sentence>
      </div>
      <label>아이디</label>
      <div css={styles.infoBlock}>
        <Sentence size="base">alcoholic</Sentence>
      </div>
      <form>
        <div>
          <div css={styles.inputBlock}>
            <label>비밀번호</label>
            <TextField
              placeholder="비밀번호를 입력해주세요."
              type="password"
              {...register('password')}
              onChange={handleChange}
            />
            {errors?.password && <ValidateMessage result={errors?.password} />}
          </div>
          <div css={styles.inputBlock}>
            <label>비밀번호 확인</label>
            <TextField
              placeholder="비밀번호를 다시 입력해주세요."
              type="password"
              {...register('passwordConfirm')}
              onChange={handleChange}
            />
            {errors?.passwordConfirm && (
              <ValidateMessage result={errors?.passwordConfirm} />
            )}
          </div>
        </div>
      </form>
      <div css={styles.btnBlock}>
        <Button style="secondary" size="base" onClick={() => setModal(!modal)}>
          회원탈퇴
        </Button>
      </div>
      <ModalAlert
        title={`이메일 인증이 완료되지 않았습니다.\n다시 인증 시도 해주세요.`}
        type={'alert'}
        isOpen={modal}
        onClick={() => setModal(!modal)}
      ></ModalAlert>
    </section>
  )
}

export default LocalInfo
