const GET_ALL_USERS_REQUESTS = 'GET_ALL_USERS_REQUESTS';
const SET_ALL_USERS_REQUESTS = 'SET_ALL_USERS_REQUESTS';
const UPDATE_STATUS = 'UPDATE_STATUS';

const initialState = {
  loading: true,
  lastStatus: {
    status: null,
    id: null,
  },
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
    case UPDATE_STATUS:
      return {
        ...state,
        lastStatus: action.payload,
      };
    default:
      return state;
  }
};

export default adminDashboardReducer;
