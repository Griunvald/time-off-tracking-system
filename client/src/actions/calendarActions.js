const SET_SELECTED_START_DAY = 'SET_SELECTED_START_DAY';
const SET_SELECTED_END_DAY = 'SET_SELECTED_END_DAY';

export const setSelectedStartDay = (payload) => {
  return {
    action: SET_SELECTED_START_DAY,
    payload,
  };
};

export const setSelectedEndDay = (payload) => {
  return {
    action: SET_SELECTED_END_DAY,
    payload,
  };
};
