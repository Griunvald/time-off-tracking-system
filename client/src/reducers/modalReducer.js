const OPEN_MODAL = 'OPEN_MODAL';
const CLOSE_MODAL = 'CLOSE_MODAL';

const initialState = null;
const modalReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case OPEN_MODAL:
      const { modalType, modalProps } = payload;

      return { ...state, open: true, modalType, modalProps };
    case CLOSE_MODAL:
      return { ...state, open: false };
    default:
      return state;
  }
};

export default modalReducer;
