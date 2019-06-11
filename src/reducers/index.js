import { combineReducers } from 'redux';
import notes from './notesReducer';
import note from './noteReducer';
import session from './sessionReducer';

export default combineReducers({
  notes,
  note,
  session
});
