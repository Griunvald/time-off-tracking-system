const GET_ALL_USERS_REQUESTS = 'GET_ALL_USERS_REQUESTS';
const SET_ALL_USERS_REQUESTS = 'SET_ALL_USERS_REQUESTS';

const initialState = {
  loading: true,
  requests: {
    createdAt: null,
    startDate: null,
    endDate: null,
    text: null,
    status: null,
    username: null,
  },
};

const adminDashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_USERS_REQUESTS:
      const requests = action.payload;
      return {
        ...state,
        requests,
        loading: false,
      };
    case SET_ALL_USERS_REQUESTS:
      return {
        ...state,
        requests,
      };
    default:
      return state;
  }
};

export default adminDashboardReducer;
