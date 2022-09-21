import account from './account';
import dragon from './dragon';
import generation from './generation';
import accountDragons from './accountDragons';
import accountInfo from './accountInfo';
import publicDragons from './publicDragons';
import { combineReducers } from 'redux';

export default combineReducers({
  account,
  dragon,
  generation,
  accountDragons,
  accountInfo,
  publicDragons,
});
