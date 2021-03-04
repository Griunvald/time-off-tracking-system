const SET_SELECTED_DAY_RANGE = 'SET_SELECTED_DAY_RANGE';

export const setSelectedDayRange = (range) => {
  return {
    type: SET_SELECTED_DAY_RANGE,
    payload: range,
  };
};
