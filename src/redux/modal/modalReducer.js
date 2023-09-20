const initialState = {
  currentModal: null,
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CURRENT_MODAL":
      return { ...state, currentModal: action.payload };
    case "CLOSE_MODAL":
      return { ...state, currentModal: false };
    default:
      return state;
  }
};

export default modalReducer;
