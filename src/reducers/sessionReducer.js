import { SET_SESSION } from '../actions/sessionActions';

const initialState = {
  username: '',
  token: '',
  image: ''
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch(type) {
    case SET_SESSION:
      return payload;
    default:
      return state;
  }
};
