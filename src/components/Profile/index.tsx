import React from 'react'
import Image from 'next/image'

import * as styles from './styles'

type Props = {
  writer?: string
  date?: string
  img?: string
}
const Profile = ({
  writer,
  date,
  img = '/assets/profile_default.png',
}: Props) => {
  return (
    <div css={styles.container}>
      <div css={styles.profile}>
        <Image
          src={img}
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
