import type {
  Banquet,
  BanquetResponse,
  BanquetsResponse,
  CreateBanquetPayload,
} from '~/types/banquet'

export function useBanquets() {
  const api = useApi()

  async function getBanquets() {
    return await api.request<BanquetsResponse>('/banquets', {
      method: 'GET',
    })
  }

  async function createBanquet(payload: CreateBanquetPayload) {
    return await api.request<BanquetResponse, CreateBanquetPayload>('/banquets', {
      method: 'POST',
      body: payload,
    })
  }

  async function deleteBanquet(id: Banquet['id']) {
    return await api.request<{ message: string }>(`/banquets/${id}`, {
      method: 'DELETE',
    })
  }

  return {
    getBanquets,
    createBanquet,
    deleteBanquet,
  }
}
