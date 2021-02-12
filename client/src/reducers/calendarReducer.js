const SET_SELECTED_DAY_RANGE = 'SET_SELECTED_DAY_RANGE';

const initialState = {
  range: null,
};

const calendarReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED_DAY_RANGE:
      return {
        ...state,
        range: action.payload,
      };
    default:
      return state;
  }
};

export default calendarReducer;
