const SET_SELECTED_DAY_RANGE = 'SET_SELECTED_DAY_RANGE';

const initialState = {
  // from: null,
  // to: null,
  range: {
    from: null,
    to: null,
  },
};

const calendarReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED_DAY_RANGE:
      const { from, to } = action.payload;
      return {
        ...state,
        range: { from, to },
      };
    default:
      return state;
  }
};

export default calendarReducer;
