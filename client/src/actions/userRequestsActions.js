const GET_USER_REQUESTS = 'GET_USER_REQUESTS';

export const getUserRequests = (requests) => {
  return {
    type: GET_USER_REQUESTS,
    payload: requests,
  };
};
