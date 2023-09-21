
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

export const toggleCheckbox = (isChecked) => {
  return {
    type: 'TOGGLE_CHECKBOX',
    payload: isChecked,
  };
};

export const setCurrentContact = (contact) => {
  return {
    type: 'SET_CURRENT_CONTACT',
    payload: contact,
  };
};