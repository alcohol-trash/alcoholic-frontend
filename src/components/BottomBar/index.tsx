import React, { useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'

import * as styles from './styles'

type Props = {
  isLoggedIn?: boolean
  index?: number
  title?: string
}

const BottomBar = ({ isLoggedIn = false, index = 1, title = '' }: Props) => {
  const router = useRouter()

  const [category, setCategory] = useState<string>(title)
  const [categoryNum, setCategoryNum] = useState<number>(index)

  const handleModal = useCallback(() => {
    if (isLoggedIn) {
      router.push({
        pathname: '/write-board',
        query: { category: category, categoryNum: categoryNum },
      })
    } else {
      router.push('/loginsignup')
    }
  }, [category, categoryNum, isLoggedIn, router])

  useEffect(() => {
    setCategory(title)
    setCategoryNum(index)
  }, [title, index])

  return (
    <>
      <section css={styles.container}>
        <div css={styles.form}>
          <div css={styles.block}>
            <Image
              src="/assets/profile_img.png"
              width={32}
              height={32}
              alt="술 로고"
            />
          </div>
          <textarea
            readOnly={true}
            onClick={handleModal}
            placeholder={
              isLoggedIn
                ? `${category}에 글 남기기`
                : '로그인 후에 작성할 수 있습니다.'
            }
            rows={1}
          />
        </div>
      </section>
    </>
  )
}

export default React.memo(BottomBar)
