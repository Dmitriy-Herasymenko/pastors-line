
const initialState = {
  showModalA: false,
  showModalB: false,
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'OPEN_MODAL_A':
      return { ...state, showModalA: true };
    case 'CLOSE_MODAL_A':
      return { ...state, showModalA: false };
    case 'OPEN_MODAL_B':
      return { ...state, showModalB: true };
    case 'CLOSE_MODAL_B':
      return { ...state, showModalB: false };
    default:
      return state;
  }
};

export default modalReducer;


  