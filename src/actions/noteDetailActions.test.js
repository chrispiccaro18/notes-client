import { fetchNote } from './noteDetailActions';

jest.mock('../services/notesApi.js', () => ({
  getNote(_id) {
    return Promise.resolve([_id]);
  } 
}));

describe('note detail actions', () => {
  it('creates an action to fetch a note', () => {
    const noteAction = fetchNote('testId');

    expect(noteAction).toEqual({
      type: 'FETCH_NOTE',
      pendingType: 'FETCH_NOTE_PENDING',
      fulfilledType: 'FETCH_NOTE_FULFILLED',
      rejectedType: 'FETCH_NOTE_REJECTED',
      payload: expect.any(Promise)
    });
  });
});
