import { GET_ALL_USERS_REQUESTS, UPDATE_STATUS } from './types';

export const getAllUsersRequests = (requestsList) => {
  return {
    type: GET_ALL_USERS_REQUESTS,
    payload: requestsList,
  };
};

export const updateStatus = (status) => {
  return {
    type: UPDATE_STATUS,
    payload: status,
  };
};
