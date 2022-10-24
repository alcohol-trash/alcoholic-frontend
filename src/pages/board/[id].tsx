import React, { useState, useEffect, useCallback } from 'react'
import { dehydrate, QueryClient, useQuery, useQueryClient } from 'react-query'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { GetServerSidePropsContext } from 'next'
import * as R from 'ramda'

import { getBoardAPI, getReplyAPI, deleteBoardAPI } from '@/api/board'

import Header from '@/components/Header'
import BackButton from '@/components/BackButton'
import Profile from '@/components/Profile'
import BoardContent from '@/components/BoardContent'
import BoardReply from '@/components/BoardReply'
import ReplyForm from '@/components/ReplyForm'
import ModalAlert from '@/components/ModalAlert'
import ModalDropDown from '@/components/ModalDropDown'

import * as styles from '@/css/board/boardDetailStyles'

const BoardDetail = () => {
  const router = useRouter()
  const { id } = router.query
  const nid = Number(id)

  const query = useQueryClient()

  const { data: board } = useQuery(['board', id], () => getBoardAPI(nid))
  const { data: reply } = useQuery(['reply', id], () => getReplyAPI(nid))

  const [menu, setMenu] = useState<boolean>(false)
  const [modal, setModal] = useState<boolean>(false)
  const [title, setTitle] = useState<string>('')

  useEffect(() => {
    if (R.isEmpty(board?.data)) {
      setModal(true)
      setTitle(board?.message)
    }
  }, [board])

  const handleModal = useCallback(() => {
    setModal(!modal)
    router.back()
  }, [modal, router])

  const handleMenu = useCallback(() => {
    setMenu(!menu)
  }, [menu])

  const handleEdit = useCallback(() => {
    //
  }, [])

  const handleDelete = async () => {
    const response = await deleteBoardAPI(nid)
    if (response) {
      setModal(true)
      if (response.success) {
        setTitle(response.message)
        router.replace('/')
      } else {
        setTitle(response.data.message)
      }
    }
  }
  return (
    <>
      {board?.success && reply?.success && (
        <section key={nid}>
          <Header
            left={<BackButton />}
            right={
              <div css={styles.menu}>
                <Image src="/assets/share.png" width={24} height={24} />
                {board.data.mine && (
                  <Image
                    src="/assets/more.png"
                    width={24}
                    height={24}
                    onClick={handleMenu}
                  />
                )}
              </div>
            }
          />
          <div css={styles.wrapper}>
            <Profile writer={board.data.writer} date={board.data.createdDate} />
            <BoardContent data={board.data} />
            <BoardReply boardSeq={nid} data={reply.data.content} />
          </div>
          <ReplyForm boardSeq={nid} />
        </section>
      )}
      <ModalAlert title={title} isOpen={modal} onClick={handleModal} />
      <ModalDropDown
        isOpen={menu}
        title="글"
        onClick={handleMenu}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </>
  )
}

export const getServerSideProps = async (
  context: GetServerSidePropsContext,
) => {
  const queryClient = new QueryClient()
  const id = context.params?.id as string
  await queryClient.prefetchQuery(['reply', Number(id)], async () => {
    const response = await getReplyAPI(Number(id))
    return response.data
  })
  await queryClient.prefetchQuery(['board', Number(id)], async () => {
    const response = await getBoardAPI(Number(id))
    return response.data
  })
  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  }
}

export default React.memo(BoardDetail)
