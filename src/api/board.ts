import instance from './base'

export const heartAPI = async (form: { boardSeq: number; type: string }) => {
  if (form.type === 'POST') {
    return instance
      .post(`/api/heart/board/${form.boardSeq}`)
      .then((response) => response.data)
      .catch((error) => error.response)
  }
  if (form.type === 'DELETE') {
    return instance
      .delete(`/api/heart/board/${form.boardSeq}`)
      .then((response) => response.data)
      .catch((error) => error.response)
  }
}

export const getReplyAPI = async (boardSeq: number) => {
  return instance
    .get(`/api/board/${boardSeq}/replies`)
    .then((response) => response.data)
    .catch((error) => error.response)
}

export const makeReplyAPI = async (form: {
  boardSeq: number
  data: { content: string }
}) => {
  return instance
    .post(`/api/board/${form.boardSeq}/reply`, form.data)
    .then((response) => response.data)
    .catch((error) => error.response)
}

export const makeRereplyAPI = async (form: {
  boardSeq: number
  data: { content: string; replyParent: number }
}) => {
  return instance
    .post(`/api/board/${form.boardSeq}/rereply`, form.data)
    .then((response) => response.data)
    .catch((error) => error.response)
}

export const changeReplyAPI = async (form: {
  replySeq: number
  data: { content: string }
}) => {
  return instance
    .put(`/api/reply/${form.replySeq}`, form.data)
    .then((response) => response.data)
    .catch((error) => error.response)
}

export const deleteReplyAPI = async (replySeq: number) => {
  return instance
    .delete(`/api/reply/${replySeq}`)
    .then((response) => response.data)
    .catch((error) => error.response)
}

export const getBoardsAPI = async (
  category: number,
) => {
  return instance
    .get(
      `/api/boards?category=${category}`,
    )
    .then((response) => response.data)
    .catch((error) => error.response)
}

export const getBoardAPI = async (seq: number) => {
  return instance
    .get(`/api/board/${seq}`)
    .then((response) => response.data)
    .catch((error) => error.response)
}

export const makeBoardAPI = async (data: any) => {
  return instance
    .post(`/api/board`, data)
    .then((response) => response.data)
    .catch((error) => error.response)
}

export const changeBoardAPI = async (form: { seq: number; data: any }) => {
  return instance
    .put(`/api/board/${form.seq}`, form.data)
    .then((response) => response.data)
    .catch((error) => error.response)
}

export const deleteBoardAPI = async (seq: number) => {
  return instance
    .delete(`/api/board/${seq}`)
    .then((response) => response.data)
    .catch((error) => error.response)
}
