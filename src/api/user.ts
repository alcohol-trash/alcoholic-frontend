import instance from './config'

export const loginAPI = async (data: { id: string; password: string }) => {
  return instance
    .post('/api/auth/login', data)
    .then((response) => response.data)
}

export const logoutAPI = async () => {
  return instance.post('/api/auth/logout').then((response) => response.data)
}

export const socialAPI = async (nickname: string) => {
  return instance
    .post('/api/auth/oauth/signup', nickname)
    .then((response) => response.data)
}

export const signupAPI = async (data: {
  email: string
  id: string
  password: string
}) => {
  return instance
    .post('/api/auth/signup', data)
    .then((response) => response.data)
}

export const mailAPI = async (urlType: string, type: string, email: string) => {
  return instance.get(`/api/mail/${urlType}/${type}`, {
    params: { email: email },
  })
}

export const memberInfoAPI = async () => {
  return instance.get('/api/member').then((response) => response.data)
}

export const forgetIdAPI = async (email: string) => {
  return instance
    .get('/api/member/forget/id', {
      params: { email: email },
    })
    .then((response) => response.data)
}

export const forgetPwdAPI = async (
  id: string,
  data: { email: string; newPassword: string },
) => {
  return instance
    .put(`/api/member/forget/${id}`, data)
    .then((response) => response.data)
}

export const changeNickAPI = async (id: string, data: { nickname: string }) => {
  return instance
    .put(`/api/member/nickname/${id}`, data)
    .then((response) => response.data)
}

export const changePwdAPI = async (
  id: string,
  data: { newPassword: string; password: string },
) => {
  return instance
    .put(`/api/member/password/${id}`, data)
    .then((response) => response.data)
}

export const changeImgAPI = async (id: string, data: any) => {
  return instance
    .put(`/api/member/image/${id}`, data)
    .then((response) => response.data)
}

export const deleteImgAPI = async (id: string) => {
  return instance
    .delete(`/api/member/image/${id}`)
    .then((response) => response.data)
}
