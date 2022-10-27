import React, { useState, useCallback, ChangeEvent, useEffect } from 'react'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import { useQuery, useMutation, useQueryClient } from 'react-query'
import { useRouter } from 'next/router'
import * as R from 'ramda'
import { AxiosError } from 'axios'

import { DataProps } from '@/interfaces/board'
import { getBoardAPI, makeBoardAPI, changeBoardAPI } from '@/api/board'
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
  const id = router.query.id
  const category = router.query.category
  const categoryNum = router.query.categoryNum

  const { data: board } = useQuery(['board', id], () => getBoardAPI(Number(id)))

  const [imageData, setImageData] = useState<string>('')

  const [modal, setModal] = useState<boolean>(false)
  const [title, setTitle] = useState<string>('')

  const query = useQueryClient()

  const makeMutation = useMutation<DataProps, AxiosError, any>(
    'boards',
    makeBoardAPI,
    {
      onSuccess: (response) => {
        if (response.success) {
          router.push(`/board/${response.data.seq}`)
        } else {
          setModal(true)
          setTitle(response.data.message)
        }
        reset()
      },
      onSettled: () => {
        query.invalidateQueries(['board', id])
      },
    },
  )

  const editMutation = useMutation<DataProps, AxiosError, any>(
    ['board', id],
    changeBoardAPI,
    {
      onSuccess: (response) => {
        if (response.success) {
          router.push(`/board/${response.data.seq}`)
        } else {
          setModal(true)
          setTitle(response.data.message)
        }
        setImageData('')
        reset()
      },
      onSettled: () => {
        query.invalidateQueries(['board', id])
      },
    },
  )

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
    if (e.target.files) {
      setImageData(e.target.files[0].name)
    }
  }

  const handleDeleteImage = useCallback(() => {
    setImageData('')
  }, [])

  const handleSubmit = useCallback(() => {
    const formData = new FormData()
    formData.append('file', imageData)
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
    if (board?.success) {
      editMutation.mutate(formData)
    } else {
      makeMutation.mutate(formData)
    }
  }, [
    board?.success,
    categoryNum,
    editMutation,
    getValues,
    imageData,
    makeMutation,
  ])

  const handleModal = useCallback(() => {
    setModal(!modal)
  }, [modal])

  useEffect(() => {
    if (board?.success && !R.isEmpty(board.data.images)) {
      setImageData(board?.data.images[0].url)
    }
  }, [board])

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
            {board?.success ? '수정' : '등록'}
          </Button>
        }
      />
      <form css={styles.container} encType="multipart/form-data">
        <section css={styles.titleBlock}>
          <label>#{board?.success ? board?.data.category : category}</label>
          <TextField
            placeholder="제목입력"
            {...register('title')}
            onChange={handleChange}
            defaultValue={board?.success ? board?.data.title : ''}
          />
        </section>
        <section>
          <BoardForm
            placeholder="내용을 입력하세요"
            {...register('content')}
            onChange={handleChange}
            defaultValue={board?.success ? board?.data.content : ''}
          />
        </section>
        <nav css={styles.bottomBlock}>
          {(!R.isEmpty(board?.data.images) || !R.isEmpty(imageData)) && (
            <div css={styles.imgBlock}>
              <div css={styles.imgName}>{imageData}</div>
              <div css={styles.imgDelete} onClick={handleDeleteImage}>
                <Image src="/assets/close.png" width={24} height={24} />
              </div>
            </div>
          )}
          <div css={styles.imgBtn}>
            <input
              type="file"
              accept="image/*"
              id="file"
              onChange={handleChangeImage}
            />
            <label htmlFor="file">
              <Image src="/assets/add_picture.png" width={30} height={30} />
            </label>
          </div>
        </nav>
      </form>
      <ModalAlert title={title} isOpen={modal} onClick={handleModal} />
    </section>
  )
}

export default WriteBoard
