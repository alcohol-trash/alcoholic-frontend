import * as styles from './styles'
import Button from '@/components/Button'
import UnCheckImg from '@/public/assets/unchecked.png'
import Image from 'next/image'
import Link from 'next/link'
import { useForm, SubmitHandler, SubmitErrorHandler } from 'react-hook-form'
import { TermsData } from '@/types/user'

const Terms = () => {
  const { register, handleSubmit, reset } = useForm<TermsData>({
    mode: 'onChange',
  })
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
            id="allAgree"
            {...register('checkAll', {
              required: true,
            })}
          />
          <label htmlFor="allAgree">
            <Image src={UnCheckImg} />
          </label>
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
          <Link href="/loginsignup/localsignupemail">
            <Button>동의하고 계정 생성하기</Button>
          </Link>
        </div>
      </form>
    </section>
  )
}

export default Terms
