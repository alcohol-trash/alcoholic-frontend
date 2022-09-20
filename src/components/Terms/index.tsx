import React from 'react'
import { useForm } from 'react-hook-form'
import Link from 'next/link'

import Button from '@/components/Button'
import CheckBox from '@/components/CheckBox'

import * as styles from './styles'
import { signupTermsValidation } from '@/libs/validations/signupTermsValidation'

type FormTypes = {
  checkAll: boolean
  checkAge: boolean
  checkService: boolean
  checkInfo: boolean
}

type changeTypes = {
  name: any
  checked: boolean
}

const Terms = () => {
  const {
    register,
    setValue,
    formState: { isValid },
  } = useForm<FormTypes>({
    resolver: signupTermsValidation(),
  })
  const changeHandler = ({ name, checked }: changeTypes) => {
    setValue(name, checked, { shouldValidate: true })
  }
  return (
    <section css={styles.container}>
      <form css={styles.form}>
        <div>
          <div css={styles.blockLine}>
            <CheckBox
              {...register('checkAll')}
              onChange={changeHandler}
              label="전체 동의하기"
            />
          </div>
          <div css={styles.inputBlock}>
            <CheckBox
              {...register('checkAge')}
              onChange={changeHandler}
              label="만 19세 이상입니다. (필수)"
            />
            <div css={styles.withBtnBlock}>
              <CheckBox
                {...register('checkService')}
                onChange={changeHandler}
                label="서비스 이용약관에 동의 (필수)"
              />
              <button css={styles.button}>보기</button>
            </div>
            <div css={styles.withBtnBlock}>
              <CheckBox
                {...register('checkInfo')}
                onChange={changeHandler}
                label="개인정보 수집 및 이용에 동의 (필수)"
              />
              <button css={styles.button}>보기</button>
            </div>
          </div>
        </div>
        <div css={styles.btnBlock}>
          <Link href="/signup/email">
            <a>
              <Button
                size="sm"
                style={isValid ? 'primary' : 'default'}
                disabled={!isValid}
              >
                인증 확인
              </Button>
            </a>
          </Link>
        </div>
      </form>
    </section>
  )
}

export default React.memo(Terms)
