import React, { useCallback } from 'react'
import Router from 'next/router'

import Button from '@/components/Button'

import * as styles from './styles'

type Props = {
  image?: string
  nickname?: string
}

const MyProfile = ({ image = '', nickname = '' }: Props) => {
  const handleButton = useCallback(() => {
    Router.push('/setting/profile')
  }, [])

  return (
    <div css={styles.container}>
      <div css={styles.img}>
        <img referrerPolicy="no-referrer" src={image} />
      </div>
      <div css={styles.name}>{nickname}</div>
      <div css={styles.button}>
        <Button onClick={handleButton} align="center" size="xs">
          프로필 편집
        </Button>
      </div>
    </div>
  )
}

export default React.memo(MyProfile)
