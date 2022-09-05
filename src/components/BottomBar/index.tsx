import React, { useState, useEffect } from 'react'
import Router from 'next/router'
import { useForm } from 'react-hook-form'
import Image from 'next/image'

import ModalWriteContent from '@/components/ModalWriteContent'

import * as styles from './styles'
import { categories } from '@/libs/data'

type Props = {
  isLoggedIn: boolean
  index?: number
}

const BottomBar = ({ isLoggedIn, index }: Props) => {
  const { register, handleSubmit, reset } = useForm()
  const [modal, setModal] = useState(false)
  const [category, setCategory] = useState<string>('주류학개론')
  const [categoryNum, setCategoryNum] = useState<number>(1)
  const onVaild = (data: any) => {
    console.log(data)
    reset()
  }
  const onHandleClick = () => {
    if (isLoggedIn) {
      setModal(!modal)
    } else {
      Router.push('/loginsignup')
    }
  }
  useEffect(() => {
    categories?.find((i) => {
      if (i.index === index) {
        setCategoryNum(i.index)
        setCategory(i.name)
      }
    })
  }, [index])

  return (
    <>
      <section css={styles.container} onClick={onHandleClick}>
        <form css={styles.form} onSubmit={handleSubmit(onVaild)}>
          <div css={styles.block}>
            <Image src="/assets/profile_img.png" width={32} height={32} />
          </div>
          <textarea
            placeholder={
              isLoggedIn
                ? `${category}에 글 남기기`
                : '로그인 후에 작성할 수 있습니다.'
            }
            rows={1}
            {...register('content')}
          />
        </form>
      </section>
      <ModalWriteContent
        isOpen={modal}
        onClick={() => setModal(!modal)}
        category={category}
        categoryNum={categoryNum}
      />
    </>
  )
}

export default React.memo(BottomBar)
