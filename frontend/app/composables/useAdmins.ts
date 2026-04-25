import type { AdminAccount, AdminResponse, AdminsResponse, CreateAdminPayload } from '~/types/admin'

export function useAdmins() {
  const api = useApi()

  async function getAdmins() {
    return await api.request<AdminsResponse>('/users/admins', {
      method: 'GET',
    })
  }

  async function createAdmin(payload: CreateAdminPayload) {
    return await api.request<AdminResponse, CreateAdminPayload>('/auth/create-admin', {
      method: 'POST',
      body: payload,
    })
  }

  async function deleteAdmin(id: AdminAccount['id']) {
    return await api.request<{ message: string }>(`/admins/${id}`, {
      method: 'DELETE',
    })
  }

  return {
    getAdmins,
    createAdmin,
    deleteAdmin,
  }
}
