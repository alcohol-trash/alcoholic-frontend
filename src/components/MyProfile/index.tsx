import React from 'react'
import Router from 'next/router'

import Button from '@/components/Button'

import * as styles from './styles'

type Props = {
  image?: string
  nickname?: string
}

const MyProfile = ({ image = '', nickname = '' }: Props) => {
  return (
    <div css={styles.container}>
      <div css={styles.img}>
        <img referrerPolicy="no-referrer" src={image} />
      </div>
      <div css={styles.name}>{nickname}</div>
      <div css={styles.button}>
        <Button
          onClick={() => Router.push('/setting/profile')}
          align="center"
          size="xs"
        >
          프로필 편집
        </Button>
      </div>
    </div>
  )
}

export default React.memo(MyProfile)
