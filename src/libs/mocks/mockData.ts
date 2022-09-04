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
    id: 1,
    title: '오늘 집들이!1',
    content: '123123123',
    isLike: true,
    like: 3,
    created: '2022.07.01T14:54:22',
    updated: '2022.07.02T14:54:22',
    writer: '1000 병의 소주를 마신 아저씨',
  },
  {
    id: 2,
    title: '오늘 집들이!2',
    content: '123123123',
    isLike: false,
    like: 3,
    created: '2022.07.01T14:54:22',
    updated: '2022.07.02T14:54:22',
    writer: '1000 병의 소주를 마신 아저씨',
  },
]

export const commentData = [
  {
    contentId: 1,
    data: [
      {
        userId: 1,
        content: '오 너무 좋은 글이네요ㅎㅎ 잘봤습니다!',
        created: '2022.07.03T14:54:22',
        updatedDate: 'string',
      },
    ],
  },
]
