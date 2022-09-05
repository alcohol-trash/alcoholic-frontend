import React, { useState } from 'react'
import Modal from 'react-modal'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import Button from '@/components/Button'
import Header from '@/components/Header'
import TextField from '@/components/TextField'
import ContentForm from '@/components/ContentForm'

import * as styles from './styles'
import theme from '@/theme'
import { categories } from '@/libs/data'
import { writeContentFormSchema } from '@/libs/validations/writeContentValidation'

type Props = {
  isOpen: boolean
  onClick: () => void
  index?: number
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

const ModalWriteContent = ({ isOpen, onClick, index }: Props) => {
  const [category, setCategory] = useState<string>('')
  const {
    register,
    setValue,
    formState: { isValid },
  } = useForm<FormTypes>({
    mode: 'onChange',
    resolver: yupResolver(writeContentFormSchema),
  })
  const handleOpen = () => {
    categories?.find((i) => {
      if (i.index === index) {
        setCategory(i.name)
      }
    })
  }
  const handleChange = ({ name, value }: any) => {
    setValue(name, value, { shouldValidate: true })
  }
  const handleSubmit = () => {
    //
  }
  return (
    <Modal
      isOpen={isOpen}
      onAfterOpen={handleOpen}
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
          <div css={styles.leftBlock}>
            <Image src="/assets/add_picture.png" width={24} height={24} />
          </div>
          <div css={styles.rightBlock}>
            <div>
              <Image src="/assets/undo_disabled.png" width={24} height={24} />
            </div>
            <div>
              <Image src="/assets/redo_disabled.png" width={24} height={24} />
            </div>
            <div css={styles.lineBlock}>
              <Image src="/assets/keyboard_down.png" width={24} height={24} />
            </div>
          </div>
        </nav>
      </form>
    </Modal>
  )
}

export default React.memo(ModalWriteContent)
