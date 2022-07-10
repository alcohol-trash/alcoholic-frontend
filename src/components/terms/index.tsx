import * as styles from './styles'
import CustomButton from '@/components/button/CustomButton'
import Link from 'next/link'
import { useForm, SubmitHandler, SubmitErrorHandler } from 'react-hook-form'
import { TermsData } from '@/types/user'

const Terms = () => {
  const {
    register,
    formState: { isValid },
    handleSubmit,
    reset,
  } = useForm<TermsData>({ mode: 'onChange' })
  const onSubmit: SubmitHandler<TermsData> = (data) => {
    console.log(data)
    reset()
  }
  const onError: SubmitErrorHandler<TermsData> = (error) => console.log(error)
  return (
    <section css={styles.Terms.Container}>
      <form css={styles.Terms.Form} onSubmit={handleSubmit(onSubmit, onError)}>
        <div css={[styles.Terms.InputBlock, styles.Terms.InputBlockLine]}>
          <input
            type="checkbox"
            {...register('checkAll', {
              required: true,
            })}
          />
          <label css={styles.Terms.Word}>전체 동의하기</label>
        </div>
        <div css={styles.Terms.InputBlock}>
          <input
            type="checkbox"
            {...register('checkAge', {
              required: true,
            })}
          />
          <label>만 19세 이상입니다. (필수)</label>
        </div>
        <div css={styles.Terms.InputBlock}>
          <input
            type="checkbox"
            {...register('checkService', {
              required: true,
            })}
          />
          <label>서비스 이용약관에 동의 (필수)</label>
        </div>
        <div css={styles.Terms.InputBlock}>
          <input
            type="checkbox"
            {...register('checkInfo', {
              required: true,
            })}
          />
          <label>개인정보 수집 및 이용에 동의 (필수)</label>
        </div>
        <div css={styles.Terms.BtnBlock}>
          <Link href="/createaccount">
            <CustomButton
              type="submit"
              content="동의하고 계정 생성하기"
              textalign="start"
              width={327}
              height={50}
              bgcolor={isValid ? 'var(--aqua)' : 'var(--gray-700)'}
              btncolor={isValid ? 'var(--black)' : 'var(--gray-300)'}
            />
          </Link>
        </div>
      </form>
    </section>
  )
}

export default Terms
