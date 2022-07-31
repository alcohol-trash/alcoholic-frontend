import React from 'react'
import { useForm } from 'react-hook-form'
import Image from 'next/image'

import * as styles from './styles'

type Props = {
  onClick: () => void
}

const BottomBar = ({ onClick }: Props) => {
  const { register, handleSubmit, reset } = useForm()

  const onVaild = (data: any) => {
    console.log(data)
    reset()
  }
  return (
    <section css={styles.container} onClick={onClick}>
      <form css={styles.form} onSubmit={handleSubmit(onVaild)}>
        <div css={styles.block}>
          <Image src="/assets/profile_img.png" width={32} height={32} />
        </div>
        <textarea
          placeholder="로그인 후에 작성할 수 있습니다."
          rows={1}
          {...register('content')}
        />
      </form>
    </section>
  )
}

export default BottomBar
