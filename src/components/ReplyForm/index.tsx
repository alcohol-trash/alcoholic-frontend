import React from 'react'
import Image from 'next/image'

import Button from '@/components/Button'

import * as styles from './styles'

const ReplyForm = () => {
  return (
    <section css={styles.container}>
      <form css={styles.form}>
        <div css={styles.block}>
          <Image src="/assets/profile_img.png" width={32} height={32} />
        </div>
        <div css={styles.textarea}>
          <textarea placeholder="댓글 남기기" rows={1} readOnly />
        </div>
      </form>
      <div css={styles.button}>
        <Button size="sm" align="center" style="secondary">
          전송
        </Button>
      </div>
    </section>
  )
}

export default React.memo(ReplyForm)
