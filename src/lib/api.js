import request from './request.js'

export const api = {
  LOGIN: '/login',
}
export const login = (data) => {
  return request({
    url: api.LOGIN,
    method: 'post',
    data,
  })
}
