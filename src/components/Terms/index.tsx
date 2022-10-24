import React, { useState, useCallback } from 'react'
import { useForm } from 'react-hook-form'
import Link from 'next/link'

import { signupTermsValidation } from '@/libs/validations/signupTermsValidation'

import Button from '@/components/Button'
import CheckBox from '@/components/CheckBox'
import TermsDetail from '@/components/TermsDetail'

import * as styles from './styles'

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
  const [service, setService] = useState<boolean>(false)
  const [info, setInfo] = useState<boolean>(false)

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

  const handleServiceClick = useCallback(() => {
    setService(!service)
  }, [service])

  const handleInfoClick = useCallback(() => {
    setInfo(!info)
  }, [info])

  return (
    <section css={styles.container}>
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
            <button css={styles.button} onClick={handleServiceClick}>
              보기
            </button>
          </div>
          <TermsDetail display={service} title="알코홀-릭 서비스 이용약관">
            이용약관
          </TermsDetail>
          <div css={styles.withBtnBlock}>
            <CheckBox
              {...register('checkInfo')}
              onChange={changeHandler}
              label="개인정보 수집 및 이용에 동의 (필수)"
            />
            <button css={styles.button} onClick={handleInfoClick}>
              보기
            </button>
          </div>
          <TermsDetail display={info} title="알코홀-릭 개인정보 수집 및 이용">
            이용약관
          </TermsDetail>
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
    </section>
  )
}

export default React.memo(Terms)
