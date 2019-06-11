import { FETCH_NOTE_PENDING, FETCH_NOTE } from '../actions/noteDetailActions';

const initialState = {
  detail: {
    _id: '',
    title: '',
    body: ''
  },
  loading: false
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch(type) {
    case FETCH_NOTE_PENDING:
      return { ...state, loading: true };
    case FETCH_NOTE:
      return { ...state, loading: false, detail: payload };
    default:
      return state;
  }
};
