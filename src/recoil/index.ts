import { atom } from 'recoil'
import { ReplyStateProps } from '@/interfaces/board'

const replyState = atom<ReplyStateProps>({
  key: 'replyState',
  default: {
    type: 'add',
    content: '',
    seq: 1,
    replyParent: 1,
    writer: '',
  },
})

export { replyState }
