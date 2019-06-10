import { NEW_NOTE_PENDING, NEW_NOTE } from '../actions/notesActions';

const initialState = {
  loading: false,
  list: []
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch(type) {
    case NEW_NOTE_PENDING:
      return { ...state, loading: true };
    case NEW_NOTE:
      return { 
        ...state,
        loading: false,
        list: [...state.list, { ...payload }] };
    default: 
      return state;
  }
};
