const GET_USER_REQUESTS = 'GET_USER_REQUESTS';

const initialState = {
  requests: {
    createdAt: null,
    startDate: null,
    endDate: null,
    text: null,
    status: null,
  },
};

const userRequestsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_REQUESTS:
      const requests = action.payload;
      return {
        ...state,
        requests: requests,
      };
    default:
      return state;
  }
};

export default userRequestsReducer;
