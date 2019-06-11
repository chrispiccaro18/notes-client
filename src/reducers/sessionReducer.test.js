import sessionReducer from './sessionReducer';
import { SET_SESSION } from '../actions/sessionActions';

jest.mock('../services/auth.js', () => ({
  login() {
    
  },
  handleAuth() {
    return Promise.resolve([]);
  }
}));

describe('session reducer tests', () => {
  const initialState = {
    username: '',
    token: '',
    image: ''
  };
  it('can handle set session action', () => {
    expect(sessionReducer(initialState, {
      type: SET_SESSION,
      payload: {
        username: 'test username',
        token: 'test token',
        image: 'test_url'
      }
    })).toEqual({
      username: 'test username',
      token: 'test token',
      image: 'test_url'
    });
  });
});
