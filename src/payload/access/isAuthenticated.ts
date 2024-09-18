import type { Access } from 'payload/config';

export const isAuthenticated: Access = ({ req: { user } }) => {
  if (user) return true;

  return {
    _status: {
      equals: 'published',
    },
  };
};
