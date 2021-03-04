import { SET_SELECTED_DAY_RANGE } from './types';

export const setSelectedDayRange = (range) => {
  return {
    type: SET_SELECTED_DAY_RANGE,
    payload: range,
  };
};
