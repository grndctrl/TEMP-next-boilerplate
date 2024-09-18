import type { Access } from 'payload/config';

export const publishedOnly: Access = () => {
  return {
    _status: {
      equals: 'published',
    },
  };
};
