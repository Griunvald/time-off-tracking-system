import { SET_SELECTED_DAY_RANGE } from '../actions/types';

const initialState = {
  range: {
    'start date': null,
    'end date': null,
    text: null,
  },
};

const calendarReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED_DAY_RANGE:
      const range = action.payload;
      return {
        ...state,
        range,
      };
    default:
      return state;
  }
};

export default calendarReducer;
