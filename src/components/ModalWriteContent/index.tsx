import React, { useState, useRef, useCallback, ChangeEvent } from 'react'
import Modal from 'react-modal'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import { useMutation } from 'react-query'

import { makeBoardAPI } from '@/api/board'
import { writeContentValidation } from '@/libs/validations/writeContentValidation'

import Button from '@/components/Button'
import Header from '@/components/Header'
import TextField from '@/components/TextField'
import ContentForm from '@/components/ContentForm'

import * as styles from './styles'
import theme from '@/theme'

type Props = {
  isOpen: boolean
  onClick: () => void
  category: string
  categoryNum: number
}

const customStyles: Modal.Styles = {
  overlay: {
    zIndex: '2',
    backgroundColor: 'rgba(16, 17, 29, .8)',
  },
  content: {
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: theme.gray[900],
    left: '0',
    right: '0',
    top: '0',
    bottom: '0',
    width: '100%',
    height: '100vh',
    padding: '0',
    border: 0,
    borderRadius: 0,
    position: 'fixed',
    zIndex: '3',
  },
}

type FormTypes = {
  title: string
  content: string
}

const ModalWriteContent = ({
  isOpen,
  onClick,
  category,
  categoryNum,
}: Props) => {
  const [imagePaths, setImagePaths] = useState<string[]>([])

  const mutation = useMutation('boards', makeBoardAPI, {
    onError: (error) => {
      console.log(error)
    },
    onSuccess: () => {
      reset()
    },
  })

  const {
    register,
    setValue,
    getValues,
    reset,
    formState: { isValid },
  } = useForm<FormTypes>({
    resolver: writeContentValidation(),
  })

  const handleClose = () => {
    reset()
  }

  const handleChange = ({ name, value }: any) => {
    setValue(name, value, { shouldValidate: true })
  }

  const handleChangeImage = (e: ChangeEvent<HTMLInputElement>) => {
    //const imageFormData = new FormData()
    // if (e.target.files) {
    //   ;[].forEach.call(e.target.files, (f) => {
    //     imageFormData.append('file', f)
    //   })
    // }
    console.log(e.target.files)
  }

  const handleSubmit = useCallback(() => {
    const formData = new FormData()
    const variables = [
      {
        category: categoryNum,
        title: getValues('title'),
        content: getValues('content'),
      },
    ]
    formData.append(
      'json',
      new Blob([JSON.stringify(variables)], { type: 'application/json' }),
    )
    mutation.mutate(formData)
  }, [categoryNum, getValues, mutation])

  return (
    <Modal
      isOpen={isOpen}
      onAfterClose={handleClose}
      ariaHideApp={false}
      style={customStyles}
      onRequestClose={onClick}
    >
      <Header
        left={
          <div onClick={onClick}>
            <Image src="/assets/close.png" width={24} height={24} />
          </div>
        }
        right={
          <Button
            onClick={handleSubmit}
            style={isValid ? 'secondaryTrue' : 'secondary'}
            disabled={!isValid}
          >
            등록
          </Button>
        }
      />
      <form css={styles.container} encType="multipart/form-data">
        <section css={styles.titleBlock}>
          <label>#{category}</label>
          <TextField
            placeholder="제목입력"
            {...register('title')}
            onChange={handleChange}
          />
        </section>
        <section>
          <ContentForm
            placeholder="내용을 입력하세요"
            {...register('content')}
            onChange={handleChange}
          />
        </section>
        <nav css={styles.bottomBlock}>
          <div css={styles.imgBtn}>
            <input
              type="file"
              accept="image/*"
              id="file"
              onChange={handleChangeImage}
            />
            <label htmlFor="file">
              <Image src="/assets/add_picture.png" width={24} height={24} />
            </label>
          </div>
        </nav>
      </form>
    </Modal>
  )
}

export default ModalWriteContent
