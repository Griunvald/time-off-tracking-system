const SET_SELECTED_DAY_RANGE = 'SET_SELECTED_DAY_RANGE';

export const setSelectedDayRange = (payload) => {
  return {
    action: SET_SELECTED_DAY_RANGE,
    payload,
  };
};
