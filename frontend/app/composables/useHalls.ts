import type { Hall, CreateHallPayload, HallResponse, HallsResponse } from '~/types/hall'

export function useHalls() {
  const api = useApi()

  async function getHalls() {
    return await api.request<HallsResponse>('/halls', {
      method: 'GET',
    })
  }

  async function createHall(payload: CreateHallPayload) {
    return await api.request<HallResponse, CreateHallPayload>('/halls', {
      method: 'POST',
      body: payload,
    })
  }

  async function deleteHall(id: Client['id']) {
    return await api.request<{ message: string }>(`/halls/${id}`, {
      method: 'DELETE',
    })
  }

  return {
    getHalls,
    createHall,
    deleteHall,
  }
}
