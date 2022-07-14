import React, { useEffect, useState, useRef } from 'react'
import * as styles from './styles'
import { SetString } from './function'

const Timer = () => {
  const [min, setMin] = useState(SetString(5, 2))
  const [sec, setSec] = useState(SetString(0, 2))

  const initialTime = useRef(300)
  const interval = useRef<any>(0)

  useEffect(() => {
    interval.current = setInterval(() => {
      initialTime.current -= 1 //숫자
      setSec(SetString(initialTime.current % 60, 2))
      setMin(SetString(initialTime.current / 60, 2))
    }, 1000)
    return () => clearInterval(interval.current)
  }, [min, sec, setMin, setSec])

  useEffect(() => {
    if (initialTime.current <= 0) {
      clearInterval(interval.current)
    }
  }, [sec])
  return (
    <section css={styles.container}>
      <div css={styles.timerBlock}>
        인증 제한 시간 {min} : {sec}
      </div>
      <p css={styles.word}>
        인증 메일이 발송됐습니다.
        <br />
        해당 메일에서 인증 링크를 눌러주세요.
      </p>
    </section>
  )
}

export default React.memo(Timer)
