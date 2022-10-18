export interface ImageProps {
  seq: number
  url: string
}

export interface BoardProps {
  title: string
  content: string
  heartCheck: boolean
  heartCount: number
  createdDate: string
  writer: string
  repliseNum: number
  images: ImageProps[]
}

export interface ReplyProps {
  content: string
  createdDate: string
  isRoot: boolean
  mine: boolean
  replyParent: number
  seq: number
  updatedDate: null
  writerNickname: string
  writerProfileImage: string
}
