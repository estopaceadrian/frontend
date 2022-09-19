import account from './account';
import dragon from './dragon';
import generation from './generation';
import { combineReducers } from 'redux';

export default combineReducers({ account, dragon, generation });
