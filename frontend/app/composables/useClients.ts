import type { Client, ClientResponse, ClientsResponse, CreateClientPayload } from '~/types/client'

export function useClients() {
  const api = useApi()

  async function getClients() {
    return await api.request<ClientsResponse>('/clients', {
      method: 'GET',
    })
  }

  async function createClient(payload: CreateClientPayload) {
    return await api.request<ClientResponse, CreateClientPayload>('/clients', {
      method: 'POST',
      body: payload,
    })
  }

  async function deleteClient(id: Client['id']) {
    return await api.request<{ message: string }>(`/clients/${id}`, {
      method: 'DELETE',
    })
  }

  return {
    getClients,
    createClient,
    deleteClient,
  }
}
