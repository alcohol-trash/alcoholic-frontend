import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useQuery } from 'react-query'
import { yupResolver } from '@hookform/resolvers/yup'
import Image from 'next/image'
import { FaUserCircle as UserFace } from 'react-icons/fa'

import Header from '@/components/Header'
import Backbutton from '@/components/backbutton'
import Button from '@/components/Button'
import TextField from '@/components/TextField'
import ValidateMessage from '@/components/ValidateMessage'
import ModalAlert from '@/components/ModalAlert'

import * as styles from '@/css/setting/settingProfileStyles'
import { getNicknameFormSchema } from '@/libs/validations/nicknameValidation'

const TYPE = 'nickname'
type FormTypes = {
  nickname: string
}

const Profile = () => {
  const { data: me } = useQuery(
    'user',
    async () =>
      await fetch(`/api/member/info`).then((response) => response.json()),
  )
  const [modal, setModal] = useState<boolean>(false)
  const [modalTitle, setModalTitle] = useState<string>('')
  const {
    register,
    setValue,
    getValues,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<FormTypes>({
    resolver: yupResolver(getNicknameFormSchema),
  })
  const handleChange = ({ name, value }: any) => {
    setValue(name, value, { shouldValidate: true })
  }
  const handleCheckClick = async () => {
    //api 연결
    const response = await fetch(`/api/member/change/${TYPE}`, {
      method: 'POST',
      body: JSON.stringify({
        email: me.email,
        nickname: getValues('nickname'),
      }),
    })
    const data = await response.json()
    if (data) {
      setModal(true)
      setModalTitle(data.message)
      if (data.success) {
        setModal(true)
        setModalTitle('정보가 수정되었습니다.')
      }
    }
  }
  const handleSubmitClick = () => {
    //api 연결
  }
  return (
    <>
      {me && me.email && (
        <section>
          <Header
            title="프로필 편집"
            left={<Backbutton />}
            right={
              <Button
                style={isValid ? 'modalLogin' : 'secondary'}
                disabled={!isValid}
                onClick={handleSubmit(handleSubmitClick)}
              >
                수정
              </Button>
            }
          />
          <section css={styles.container}>
            <section css={styles.btnBlock}>
              <div css={styles.imgBlock}>
                <Image src="/assets/camera.png" width={20} height={20} />
              </div>
              <div css={styles.imgBlock}>
                <Image src="/assets/delete.png" width={20} height={20} />
              </div>
            </section>
            <section css={styles.profileBlock}>
              <div css={styles.img}>
                <UserFace size={80} />
              </div>
              <div css={styles.nickname}>{me.nickname}</div>
            </section>
            <section>
              <label>닉네임</label>
              <div css={styles.inputBlock}>
                <div css={styles.leftBlock}>
                  <TextField
                    {...register('nickname')}
                    onChange={handleChange}
                  />
                  {errors?.nickname && (
                    <ValidateMessage result={errors?.nickname} />
                  )}
                </div>
                <div css={styles.rightBlock}>
                  <Button
                    size="sm"
                    align="center"
                    style={isValid ? 'primary' : 'default'}
                    onClick={handleSubmit(handleCheckClick)}
                  >
                    확인
                  </Button>
                </div>
              </div>
            </section>
          </section>
          <ModalAlert
            isOpen={modal}
            title={modalTitle}
            onClick={() => setModal(!modal)}
          />
        </section>
      )}
    </>
  )
}

export default Profile
