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

export const myMenus = [
  { name: '내가 쓴 글', count: mockWriteData?.length },
  { name: '내가 쓴 댓글', count: mockCommentData?.length },
]
