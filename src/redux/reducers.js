import { combineReducers } from 'redux';
import modalReducer from './modal/modalReducer';

const rootReducer = combineReducers({
    modals: modalReducer,
});

export default rootReducer;