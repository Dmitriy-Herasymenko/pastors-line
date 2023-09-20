import { combineReducers } from 'redux';
import modalsReducer from './modal/modalsReducer';

const rootReducer = combineReducers({
    modals: modalsReducer,
});

export default rootReducer;