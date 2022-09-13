import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useQuery } from 'react-query'
import { yupResolver } from '@hookform/resolvers/yup'
import Image from 'next/image'

import Header from '@/components/Header'
import BackButton from '@/components/BackButton'
import Button from '@/components/Button'
import TextField from '@/components/TextField'
import ValidateMessage from '@/components/ValidateMessage'
import ModalAlert from '@/components/ModalAlert'

import * as styles from '@/css/setting/settingProfileStyles'
import { getNicknameFormSchema } from '@/libs/validations/nicknameValidation'

type FormTypes = {
  nickname: string
}

const Profile = () => {
  const { data: me } = useQuery(
    'user',
    async () => await fetch(`/api/member`).then((response) => response.json()),
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
    //닉네임 변경
    const response = await fetch(`/api/member/nickname/${me.data.id}`, {
      method: 'PUT',
      headers: {
        cookie: `${document.cookie}`,
      },
      body: JSON.stringify({
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
  const handleSendClick = async () => {
    const response = await fetch(`/api/member/image/${me.data.id}`, {
      method: 'PUT',
      headers: {
        cookie: `${document.cookie}`,
      },
    })
    const data = await response.json()
    if (data) {
      setModal(true)
      setModalTitle(data.message)
      if (data.success) {
        setModal(true)
        setModalTitle('이미지가 변경되었습니다.')
      }
    }
  }
  const handleChangeClick = () => {
    //
  }
  const handleDeleteClick = async () => {
    //이미지 삭제
    const response = await fetch(`/api/member/image/${me.data.id}`, {
      method: 'DELETE',
      headers: {
        cookie: `${document.cookie}`,
      },
    })
    const data = await response.json()
    if (data) {
      setModal(true)
      setModalTitle(data.message)
      if (data.success) {
        setModal(true)
        setModalTitle('이미지가 삭제되었습니다.')
      }
    }
  }
  return (
    <>
      {me?.data.id && (
        <section>
          <Header title="프로필 편집" left={<BackButton />} />
          <section css={styles.container}>
            <section css={styles.btnBlock}>
              <div css={styles.imgBlock} onClick={handleChangeClick}>
                <Image src="/assets/camera.png" width={20} height={20} />
              </div>
              <div css={styles.imgBlock} onClick={handleDeleteClick}>
                <Image src="/assets/delete.png" width={20} height={20} />
              </div>
            </section>
            <section css={styles.profileBlock}>
              <div css={styles.img}>
                <img referrerPolicy="no-referrer" src={me.data.image} />
              </div>
              <div css={styles.nickname}>{me.data.nickname}</div>
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

export default React.memo(Profile)
