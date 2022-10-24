import React, { useCallback } from 'react'
import * as R from 'ramda'

import { ReplyProps } from '@/interfaces/board'

import Reply from '@/components/Reply'

import * as styles from './styles'

type Props = {
  data?: any
  boardSeq?: number
}

const BoardReply = ({ data, boardSeq }: Props) => {
  const findRereply = useCallback(
    (index: any) => {
      let rereply: ReplyProps[] = []
      if (!R.isEmpty(data)) {
        rereply = data?.filter(
          (i: ReplyProps) => !i.isRoot && i.replyParent === index,
        )
      }
      return rereply
    },
    [data],
  )
  return (
    <section>
      {!R.isEmpty(data) && (
        <div css={styles.reply}>
          {data?.map((item: ReplyProps) => {
            if (item.isRoot) {
              const reReply = findRereply(item.replyParent)
              return (
                <Reply
                  key={item.seq}
                  data={item}
                  reReply={reReply}
                  boardSeq={boardSeq}
                />
              )
            }
          })}
        </div>
      )}
    </section>
  )
}

export default React.memo(BoardReply)
