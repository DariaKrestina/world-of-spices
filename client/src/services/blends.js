import api from './config'

export const getAllBlends = async () => {
  const resp = await api.get('/blends')
  return resp.data
}

export const postBlend = async (blendData) => {
  const resp = await api.post('/blends', { blend: blendData })
  return resp.data
}

export const deleteBlend = async (id) => {
  const resp = await api.delete(`/blends/${id}`)
  return resp
}

export const putBlend = async (id, blendData) => {
  const resp = await api.put(`/blends/${id}`, { blend: blendData })
  return resp.data
}
