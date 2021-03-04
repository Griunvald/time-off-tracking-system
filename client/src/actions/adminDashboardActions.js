const GET_ALL_USERS_REQUESTS = 'GET_ALL_USERS_REQUESTS';
const UPDATE_STATUS = 'UPDATE_STATUS';

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
