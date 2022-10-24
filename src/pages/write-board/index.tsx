import React, { useState, useRef, useCallback, ChangeEvent } from 'react'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import { useMutation } from 'react-query'
import { useRouter } from 'next/router'

import { makeBoardAPI } from '@/api/board'
import { writeContentValidation } from '@/libs/validations/writeContentValidation'

import Button from '@/components/Button'
import Header from '@/components/Header'
import TextField from '@/components/TextField'
import BoardForm from '@/components/BoardForm'
import ModalAlert from '@/components/ModalAlert'

import * as styles from '../../css/board/writeBoardStyles'

type FormTypes = {
  title: string
  content: string
}

const WriteBoard = () => {
  const router = useRouter()
  const category = router.query.category
  const categoryNum = router.query.categoryNum

  const [imagePaths, setImagePaths] = useState<string[]>([])

  const [modal, setModal] = useState<boolean>(false)
  const [title, setTitle] = useState<string>('')

  const mutation = useMutation('boards', makeBoardAPI, {
    onSuccess: (response) => {
      if (response.success) {
        router.push(`/board/${response.data.seq}`)
      } else {
        setModal(true)
        setTitle(response.data.message)
      }
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

  const handleClick = useCallback(() => {
    router.push('/')
  }, [router])

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

  const handleModal = useCallback(() => {
    setModal(!modal)
  }, [modal])

  return (
    <section>
      <Header
        left={
          <div onClick={handleClick}>
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
          <BoardForm
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
      <ModalAlert title={title} isOpen={modal} onClick={handleModal} />
    </section>
  )
}

export default WriteBoard
