import { GET_USER_REQUESTS, SET_USER_REQUESTS } from '../actions/types';

const initialState = {
  loading: true,
  requests: {
    createdAt: null,
    startDate: null,
    endDate: null,
    text: null,
    status: null,
    user: null,
    email: null,
  },
};

const userRequestsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_REQUESTS:
      const requests = action.payload;
      return {
        ...state,
        requests,
        loading: false,
      };
    case SET_USER_REQUESTS:
      return {
        ...state,
        requests,
      };
    default:
      return state;
  }
};

export default userRequestsReducer;
