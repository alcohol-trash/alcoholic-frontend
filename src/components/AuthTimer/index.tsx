import { useEffect, useState } from 'react'
import Countdown from 'react-countdown'

import * as styles from './styles'

type Props = {
  time: number // 분 기준
  message?: string
}
type FormattedProps = {
  minutes: string
  seconds: string
}
type CountdownProps = {
  formatted: FormattedProps
}

const AuthTimer = ({ time, message: msg }: Props) => {
  const [message, setMessage] = useState<string | undefined>(msg)
  const [isCompleted, setIsCompleted] = useState<boolean>(false)
  const diff = time * 60 * 1000

  const renderer = ({ formatted }: CountdownProps) => {
    const { minutes, seconds } = formatted
    return (
      <span>
        {minutes}:{seconds}
      </span>
    )
  }
  useEffect(() => setMessage(msg), [msg])
  useEffect(() => {
    if (isCompleted)
      setMessage('인증 시간이 만료되었습니다.\n재요청 버튼을 눌러주세요.')
  }, [isCompleted])

  return (
    <div css={styles.container}>
      <div>
        인증 제한 시간{' '}
        {!isCompleted ? (
          <Countdown
            date={Date.now() + diff}
            renderer={renderer}
            onComplete={() => {
              setIsCompleted(true)
            }}
          />
        ) : (
          '0:00'
        )}
      </div>
      <div css={styles.msg}>{message}</div>
    </div>
  )
}

export default AuthTimer
