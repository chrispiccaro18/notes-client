import { NEW_NOTE_PENDING } from '../actions/notesActions';

const initialState = {
  loading: false,
  list: []
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch(type) {
    case NEW_NOTE_PENDING:
      return { ...state, loading: true };
    default: 
      return state;
  }
};
