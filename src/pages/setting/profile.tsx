import React, { useState, useCallback, ChangeEvent } from 'react'
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
    reset,
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
      setModalTitle(response.message)
      reset()
    }
  }

  const handleChangeImage = async (e: ChangeEvent<HTMLInputElement>) => {
    const formData = new FormData()
    if (e.target.files) {
      formData.append('file', e.target.files[0])
      const response = await changeImgAPI(me.data.id, formData)
      if (response) {
        setModal(true)
        setModalTitle(response.message)
      }
    }
  }

  const handleDeleteImage = async () => {
    const response = await deleteImgAPI(me.data.id)
    if (response) {
      setModal(true)
      setModalTitle(response.message)
    }
  }

  const handleModal = useCallback(() => {
    setModal(!modal)
  }, [modal])

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
          <ModalAlert isOpen={modal} title={modalTitle} onClick={handleModal} />
        </section>
      )}
    </>
  )
}

export default React.memo(Profile)
