import instance from './config'

export const heartAPI = async (boardSeq: number, type: string) => {
  if (type === 'POST') {
    return instance
      .post(`/api/heart/board/${boardSeq}`)
      .then((response) => response.data)
      .catch((error) => error.response)
  }
  if (type === 'DELETE') {
    return instance
      .delete(`/api/heart/board/${boardSeq}`)
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

export const makeReplyAPI = async (
  boardSeq: number,
  data: { content: string },
) => {
  return instance
    .post(`/api/board/${boardSeq}/reply`, data)
    .then((response) => response.data)
    .catch((error) => error.response)
}

export const makeRereplyAPI = async (
  boardSeq: number,
  data: { content: string; replayParent: number },
) => {
  return instance
    .post(`/api/board/${boardSeq}/rereply`, data)
    .then((response) => response.data)
    .catch((error) => error.response)
}

export const changeReplyAPI = async (
  type: string,
  replySeq: number,
  data?: { content: string },
) => {
  if (type === 'PUT') {
    return instance
      .put(`/api/reply/${replySeq}`, data)
      .then((response) => response.data)
      .catch((error) => error.response)
  }
  if (type === 'DELETE') {
    return instance
      .delete(`/api/reply/${replySeq}`)
      .then((response) => response.data)
      .catch((error) => error.response)
  }
}

export const getBoardsAPI = async (category: number) => {
  return instance
    .get(`/api/boards/${category}`)
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

export const changeBoardAPI = async (seq: number, data: any) => {
  return instance
    .put(`/api/board/${seq}`, data)
    .then((response) => response.data)
    .catch((error) => error.response)
}

export const deleteBoardAPI = async (seq: number) => {
  return instance
    .delete(`/api/board/${seq}`)
    .then((response) => response.data)
    .catch((error) => error.response)
}
