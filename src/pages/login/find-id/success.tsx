import React from 'react'
import Router from 'next/router'

import Title from '@/components/Title'
import TextField from '@/components/TextField'
import Button from '@/components/Button'

import * as styles from '@/css/login/findIdStyles'

const FindIdSuccess = () => {
  const handleClick = () => {
    // 로그인하기 router.push
    Router.push('/login/localLogin')
  }
  return (
    <>
      <div css={styles.container}>
        <Title>아이디 찾기</Title>
        <div>
          <div css={styles.form}>
            <div css={styles.box}>
              <label>아이디</label>
              <div>
                <TextField value="test" readonly={true} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div css={styles.buttonContainer}>
        <Button size="sm" style="primary" onClick={handleClick}>
          로그인하기
        </Button>
      </div>
    </>
  )
}

export default React.memo(FindIdSuccess)
