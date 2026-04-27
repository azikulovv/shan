import type {
  Banquet,
  BanquetResponse,
  BanquetsResponse,
  CreateBanquetPayload,
  UpdateBanquetPayload,
} from '~/types/banquet'

export function useBanquets() {
  const api = useApi()

  async function getBanquets() {
    return await api.request<BanquetsResponse>('/banquets', {
      method: 'GET',
    })
  }

  async function getBanquet(id: Banquet['id']) {
    return await api.request<BanquetResponse>(`/banquets/${id}`, {
      method: 'GET',
    })
  }

  async function createBanquet(payload: CreateBanquetPayload) {
    return await api.request<BanquetResponse, CreateBanquetPayload>('/banquets', {
      method: 'POST',
      body: payload,
    })
  }

  async function updateBanquet(id: Banquet['id'], payload: UpdateBanquetPayload) {
    return await api.request<BanquetResponse, UpdateBanquetPayload>(`/banquets/${id}`, {
      method: 'PATCH',
      body: payload,
    })
  }

  async function deleteBanquet(id: Banquet['id']) {
    return await api.request<{ message: string }>(`/banquets/${id}`, {
      method: 'DELETE',
    })
  }

  return {
    getBanquet,
    getBanquets,
    createBanquet,
    updateBanquet,
    deleteBanquet,
  }
}
