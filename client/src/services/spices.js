import api from './config'

export const getAllSpices = async () => {
  const resp = await api.get('/spices')
  return resp.data
}

export const getOneSpice = async (id) => {
  const resp = await api.get(`/spices/${id}`);
  return resp.data;
}