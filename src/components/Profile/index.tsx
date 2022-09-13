import React from 'react'
import Image from 'next/image'

import * as styles from './styles'

type Props = {
  writer?: string
  date?: string
}
const Profile = ({ writer, date }: Props) => {
  return (
    <div css={styles.container}>
      <div css={styles.profile}>
        <Image
          src="/assets/profile_default.png"
          alt="회색 배경에 흰 사람 동그란 프로필 이미지"
          width={40}
          height={40}
        />
      </div>
      <div css={styles.info}>
        <strong>{writer}</strong>
        <p>{date}</p>
      </div>
    </div>
  )
}
export default React.memo(Profile)
