import type { UserRole } from '~/types/auth'

export const getRole = (role: UserRole) => {
  return {
    OWNER: 'Владелец',
    ADMIN: 'Администратор',
  }[role]
}
