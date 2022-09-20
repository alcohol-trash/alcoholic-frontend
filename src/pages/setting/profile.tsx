import React, { useState, ChangeEvent } from 'react'
import { useForm } from 'react-hook-form'
import { useQuery } from 'react-query'
import Image from 'next/image'

import {
  memberInfoAPI,
  changeNickAPI,
  changeImgAPI,
  deleteImgAPI,
} from '@/api/user'
import { nicknameValidation } from '@/libs/validations/nicknameValidation'

import Header from '@/components/Header'
import BackButton from '@/components/BackButton'
import Button from '@/components/Button'
import TextField from '@/components/TextField'
import ValidateMessage from '@/components/ValidateMessage'
import ModalAlert from '@/components/ModalAlert'

import * as styles from '@/css/setting/settingProfileStyles'

type FormTypes = {
  nickname: string
}

const Profile = () => {
  const { data: me } = useQuery('user', async () => await memberInfoAPI())

  const [modal, setModal] = useState<boolean>(false)
  const [modalTitle, setModalTitle] = useState<string>('')

  const {
    register,
    setValue,
    getValues,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<FormTypes>({
    resolver: nicknameValidation(),
  })

  const handleChange = ({ name, value }: any) => {
    setValue(name, value, { shouldValidate: true })
  }

  const handleChangeNickname = async () => {
    const response = await changeNickAPI(me.data.id, {
      nickname: getValues('nickname'),
    })
    if (response) {
      setModal(true)
      setModalTitle(response.data.message)
      if (response.data.success) {
        setModal(true)
        setModalTitle('정보가 수정되었습니다.')
      }
    }
  }

  const handleChangeImage = async (e: ChangeEvent<HTMLInputElement>) => {
    // const formData = new FormData()
    // if (e.target.files) {
    //   formData.append('file', e.target.files[0])
    //   const response = await fetch(`/api/member/image/${me.data.id}`, {
    //     method: 'PUT',
    //     headers: {
    //       cookie: `${document.cookie}`,
    //     },
    //     body: formData,
    //   })
    //   const data = await response.json()
    //   if (data) {
    //     setModal(true)
    //     setModalTitle(data.message)
    //     if (data.success) {
    //       setModal(true)
    //       setModalTitle('이미지가 변경되었습니다.')
    //     }
    //   }
    // }
  }

  const handleDeleteImage = async () => {
    const response = await deleteImgAPI(me.data.id)
    if (response) {
      setModal(true)
      setModalTitle(response.data.message)
      if (response.data.success) {
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
              <div css={[styles.imgBlock, styles.label]}>
                <input
                  type="file"
                  accept="image/*"
                  id="file"
                  onChange={handleChangeImage}
                />
                <label htmlFor="file">
                  <Image src="/assets/camera.png" width={20} height={20} />
                </label>
              </div>
              <div css={styles.imgBlock} onClick={handleDeleteImage}>
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
                    onClick={handleSubmit(handleChangeNickname)}
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
