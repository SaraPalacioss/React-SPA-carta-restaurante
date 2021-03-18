import { combineReducers } from 'redux';
import cartaReducer from './cartaReducer';

export default combineReducers({
    carta: cartaReducer
});