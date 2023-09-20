
export const setCurrentModal = (modalName) => {
  return {
    type: 'SET_CURRENT_MODAL',
    payload: modalName,
  };
};

export const closeModal = () => {
  return {
    type: 'CLOSE_MODAL',
  };
}