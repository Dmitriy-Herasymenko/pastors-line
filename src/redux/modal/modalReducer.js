const initialState = {
  currentModal: null,
  checkboxChecked: false,
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CURRENT_MODAL":
      return { ...state, currentModal: action.payload };
    case "CLOSE_MODAL":
      return { ...state, currentModal: false };
      case 'TOGGLE_CHECKBOX':
        return {
          ...state,
          checkboxChecked: action.payload,
        };
      case 'SET_CURRENT_CONTACT':
        return {
          ...state,
          currentContact: action.payload,
        };
    default:
      return state;
  }
};

export default modalReducer;
