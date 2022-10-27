import React, { useState, useEffect, useCallback } from 'react'
import { dehydrate, QueryClient, useQuery, useQueryClient } from 'react-query'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useRecoilState } from 'recoil'
import { GetServerSidePropsContext } from 'next'
import * as R from 'ramda'

import { ReplyStateProps } from '@/interfaces/board'
import { getBoardAPI, getReplyAPI, deleteBoardAPI } from '@/api/board'
import { replyState } from '@/recoil'

import Header from '@/components/Header'
import BackButton from '@/components/BackButton'
import Profile from '@/components/Profile'
import BoardContent from '@/components/BoardContent'
import BoardReply from '@/components/BoardReply'
import ReplyForm from '@/components/ReplyForm'
import ModalAlert from '@/components/ModalAlert'
import ModalDropDown from '@/components/ModalDropDown'
import ModalReply from '@/components/ModalReply'

import * as styles from '@/css/board/boardDetailStyles'

const BoardDetail = () => {
  const query = useQueryClient()
  const router = useRouter()
  const { id } = router.query
  const nid = Number(id)

  const { data: board } = useQuery(['board', id], () => getBoardAPI(nid))
  const { data: reply } = useQuery(['reply', id], () => getReplyAPI(nid))

  const [, setState] = useRecoilState<ReplyStateProps>(replyState)

  const [menu, setMenu] = useState<boolean>(false)
  const [modal, setModal] = useState<boolean>(false)
  const [replyModal, setReplyModal] = useState<boolean>(false)
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
    router.push({
      pathname: '/write-board',
      query: { id: nid },
    })
  }, [nid, router])

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

  const handleShare = useCallback(() => {
    if (navigator.share) {
      navigator.share({
        title: '알콜홀-릭',
        text: '술을 좋아한다면 알콜홀-릭',
        url: `https://alcoholic.ml/board/${nid}`,
      })
    } else {
      setModal(true)
      setTitle('공유하기가 지원되지 않는 환경입니다.')
    }
  }, [nid])

  const handleCloseReplyModal = useCallback(() => {
    query.invalidateQueries(['reply', nid])
    setReplyModal(!replyModal)
    setState({
      type: 'add',
      content: '',
      seq: 1,
      replyParent: 1,
      writer: '',
    })
  }, [nid, query, replyModal, setState])

  const handleReplyModal = useCallback(() => {
    setReplyModal(true)
  }, [])

  return (
    <>
      {board?.success && reply?.success && (
        <section key={nid}>
          <Header
            left={<BackButton />}
            right={
              <div css={styles.menu}>
                <div onClick={handleShare}>
                  <Image src="/assets/share.png" width={24} height={24} />
                </div>

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
          <div onClick={handleReplyModal}>
            <ReplyForm />
          </div>
        </section>
      )}
      <ModalAlert title={title} isOpen={modal} onClick={handleModal} />
      <ModalDropDown
        isOpen={menu}
        title="컨텐츠"
        onClick={handleMenu}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
      <ModalReply
        boardSeq={nid}
        isOpen={replyModal}
        onClick={handleCloseReplyModal}
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
