import React from 'react'
import Modal from 'react-modal'
import Image from 'next/image'

import Button from '@/components/Button'
import Header from '@/components/Header'
import Editor from '@/components/Editor'
import theme from '@/theme'

import * as styles from './styles'
import TextField from '../TextField'

type Props = {
  isOpen: boolean
  onClick: () => void
}

const customStyles: Modal.Styles = {
  overlay: {
    zIndex: '2',
    backgroundColor: 'rgba(16, 17, 29, .8)',
  },
  content: {
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

const ModalWriteContent = ({ isOpen, onClick }: Props) => {
  return (
    <Modal
      isOpen={isOpen}
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
        right={<Button style="secondary">등록</Button>}
      />
      <section css={styles.container}>
        {/* <section css={styles.titleBlock}>
          <label>#주류학개론</label>
          <TextField placeholder="제목입력" />
        </section> */}
        {/* <section css={styles.contentBlock}>
          <textarea placeholder="내용을 입력하세요" />
        </section> */}
        {/* <section>
          <div css={styles.editBlock} contentEditable="true"></div>
          <div css={styles.leftBlock}>
            <label htmlFor="file">
              <Image src="/assets/add_picture.png" width={24} height={24} />
            </label>
            <input type="file" accept="image/*" id="file" />
          </div>
        </section>
        <nav css={styles.bottomBlock}>
          <div css={styles.leftBlock}>
            <label htmlFor="file">
              <Image src="/assets/add_picture.png" width={24} height={24} />
            </label>
            <input type="file" accept="image/*" id="file" />
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
        </nav> */}
        <Editor />
      </section>
    </Modal>
  )
}

export default React.memo(ModalWriteContent)
