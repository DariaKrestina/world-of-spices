import api from './config'

export const getAllBlends = async () => {
  const resp = await api.get('/blends')
  return resp.data
}