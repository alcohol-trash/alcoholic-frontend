import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import Link from 'next/link'

import Button from '@/components/Button'
import Checkbox from '@/components/Checkbox'

import * as styles from './styles'
import { getSignupTermsFormSchema } from '@/libs/validations/signupTermsValidation'

type FormTypes = {
  checkAll: boolean
  checkAge: boolean
  checkService: boolean
  checkInfo: boolean
}

const Terms = () => {
  const {
    register,
    formState: { isValid },
  } = useForm<FormTypes>({
    mode: 'onChange',
    resolver: yupResolver(getSignupTermsFormSchema),
  })
  return (
    <section css={styles.container}>
      <form css={styles.form}>
        <div>
          <div css={styles.blockLine}>
            <Checkbox
              label="전체 동의하기"
              value={true}
              {...register('checkAll')}
            />
          </div>
          <div css={styles.inputBlock}>
            <Checkbox
              value={true}
              {...register('checkAge')}
              label="만 19세 이상입니다. (필수)"
            />
            <div css={styles.withBtnBlock}>
              <Checkbox
                value={true}
                {...register('checkService')}
                label="서비스 이용약관에 동의 (필수)"
              />
              <button css={styles.button}>보기</button>
            </div>
            <div css={styles.withBtnBlock}>
              <Checkbox
                value={true}
                {...register('checkInfo')}
                label="개인정보 수집 및 이용에 동의 (필수)"
              />
              <button css={styles.button}>보기</button>
            </div>
          </div>
        </div>
        <div css={styles.btnBlock}>
          <Link href="/signup/email">
            <a>
              <Button size="sm" style={isValid ? 'primary' : 'default'}>
                인증 확인
              </Button>
            </a>
          </Link>
        </div>
      </form>
    </section>
  )
}

export default Terms
