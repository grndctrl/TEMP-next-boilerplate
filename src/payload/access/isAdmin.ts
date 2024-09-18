import type { User } from '@/payload-types'
import type { Access, FieldAccess } from 'payload/types'

export const isAdmin: Access<any, User> = ({ req: { user } }) => {
  // EXAMPLE Return true or false based on if the user has an admin role
  // return Boolean(user.roles?.includes('admin'));

  return false
}

export const isAdminFieldLevel: FieldAccess<{ id: string }, unknown, User> = ({
  req: { user },
}) => {
  // EXAMPLE Return true or false based on if the user has an admin role
  // return Boolean(user?.roles?.includes('admin'));

  return false
}
