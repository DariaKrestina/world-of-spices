import api from './config'

export const getAllSpices = async () => {
  const resp = await api.get('/spices')
  return resp.data
}