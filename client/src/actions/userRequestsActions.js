import { GET_USER_REQUESTS } from './types';

export const getUserRequests = (requests) => {
  return {
    type: GET_USER_REQUESTS,
    payload: requests,
  };
};
