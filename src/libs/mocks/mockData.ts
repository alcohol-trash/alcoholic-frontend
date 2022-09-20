export const mockWriteData =
  [
    {
      title: 'title',
      content:
        'contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent',
      date: '2022-02-13',
      images: [{ src: '1' }, { src: '2' }, { src: '3' }],
    },
    {
      title: 'title',
      content:
        'contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent',
      date: '2022-02-13',
    },
    {
      title: 'title',
      content: 'content',
      date: '2022-02-13',
      images: [{ src: '1' }, { src: '2' }, { src: '3' }],
    },
    {
      title: 'title',
      content:
        'contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent',
      date: '2022-02-13',
      images: [{ src: '1' }, { src: '2' }, { src: '3' }],
    },
    {
      title: 'title',
      content:
        'contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent',
      date: '2022-02-13',
    },
    {
      title: 'title',
      content: 'content',
      date: '2022-02-13',
      images: [{ src: '1' }, { src: '2' }, { src: '3' }],
    },
  ] || null

export const mockCommentData =
  [
    {
      toWriter: 'toWriter',
      content:
        'comment content comment content comment content comment content comment content comment content ',
      date: '2022-02-13',
    },
    {
      toWriter: 'toWriter',
      content: 'comment content',
      date: '2022-02-13',
    },
  ] || null

export const menus = [
  { name: '내가 쓴 글', count: mockWriteData?.length },
  { name: '내가 쓴 댓글', count: mockCommentData?.length },
]

/**
 * 컨텐츠 리스트, 진입: /content-detail/{id}
 */
export const contentData = [
  {
    seq: 1,
    title: '이태원 술집 TOP 5',
    content: '여기 동생이랑 가봤는데 리얼 찐 맛집!',
    heartCheck: true,
    heartCount: 3,
    createdDate: '2022.07.01T14:54:22',
    updatedDate: '2022.07.02T14:54:22',
    writer: '1000 병의 소주를 마신 아저씨',
    repliesNum: 0,
    images: [
      {
        seq: 0,
        url: '/assets/babamba.png',
      },
      { seq: 1, url: '/assets/babamba.png' },
    ],
  },
  {
    seq: 2,
    title: '이태원 술집 TOP 5',
    content: '여기 동생이랑 가봤는데 리얼 찐 맛집!',
    heartCheck: true,
    heartCount: 3,
    createdDate: '2022.07.01T14:54:22',
    updatedDate: '2022.07.02T14:54:22',
    writer: '1000 병의 소주를 마신 아저씨',
    repliesNum: 0,
    images: [
      {
        seq: 0,
        url: '/assets/babamba.png',
      },
      { seq: 1, url: '/assets/babamba.png' },
      { seq: 1, url: '/assets/babamba.png' },
    ],
  },
]

export const commentData = [
  {
    seq: 1,
    replyParent: 1,
    content: '댓글 솰라',
    isRoot: true,
    createdDate: '2022.01.01T00:00:00',
    updatedDate: null,
  },
  {
    seq: 4,
    replyParent: 1,
    content: '댓글 솰라',
    isRoot: false,
    createdDate: '2022.01.04T00:00:00',
    updatedDate: null,
  },
  {
    seq: 2,
    replyParent: 2,
    content: '댓글 솰라',
    isRoot: true,
    createdDate: '2022.01.02T00:00:00',
    updatedDate: null,
  },
  {
    seq: 5,
    replyParent: 2,
    content: '댓글 솰라',
    isRoot: false,
    createdDate: '2022.01.05T00:00:00',
    updatedDate: null,
  },
  {
    seq: 6,
    replyParent: 2,
    content: '댓글 솰라',
    isRoot: false,
    createdDate: '2022.01.06T00:00:00',
    updatedDate: null,
  },
  {
    seq: 3,
    replyParent: 3,
    content: '댓글 솰라',
    isRoot: true,
    createdDate: '2022.01.03T00:00:00',
    updatedDate: null,
  },
]
