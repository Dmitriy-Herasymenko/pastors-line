
const initialState = {
    isOpen: false,
  };
  
  export const openModal = () => ({
    type: 'OPEN_MODAL',
  });
  
  export const closeModal = () => ({
    type: 'CLOSE_MODAL',
  });
  
  const modalsReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'OPEN_MODAL':
        return { ...state, isOpen: true };
      case 'CLOSE_MODAL':
        return { ...state, isOpen: false };
      default:
        return state;
    }
  };
  
  export default modalsReducer;
  