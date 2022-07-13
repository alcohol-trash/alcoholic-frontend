import React from 'react'
import * as styles from './styles'

const Timer = () => {
  return (
    <section css={styles.container}>
      <div css={styles.timerBlock}>인증 제한 시간 5:00</div>
      <p css={styles.word}>
        인증 메일이 발송됐습니다.
        <br />
        해당 메일에서 인증 링크를 눌러주세요.
      </p>
    </section>
  )
}

export default React.memo(Timer)
