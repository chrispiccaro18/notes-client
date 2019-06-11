import { setSession } from './sessionActions';

jest.mock('../services/auth.js', () => ({
  handleAuth() {
    return Promise.resolve([]);
  }
}));

describe('session actions', () => {
  it('creates an action to set the session', () => {
    const sessionAction = setSession();
    expect(sessionAction).toEqual({
      type: 'SET_SESSION',
      pendingType: 'SET_SESSION_PENDING',
      fulfilledType: 'SET_SESSION_FULFILLED',
      rejectedType: 'SET_SESSION_REJECTED',
      payload: expect.any(Promise)
    });
  });
});
