import noteReducer from './noteReducer';
import { FETCH_NOTE_PENDING, FETCH_NOTE } from '../actions/noteDetailActions';

describe('note reducer tests', () => {
  const initialState = {
    detail: {},
    loading: false
  };

  it('can handle a fetch note pending', () => {
    expect(noteReducer(initialState, {
      type: FETCH_NOTE_PENDING
    })).toEqual({
      loading: true,
      detail: {}
    });
  });

  it('can handle a fetch note', () => {
    expect(noteReducer({ ...initialState, loading: true }, {
      type: FETCH_NOTE,
      payload: {
        _id: 'testId',
        title: 'test title',
        body: 'test body'
      }
    })).toEqual({
      loading: false,
      detail: {
        _id: 'testId',
        title: 'test title',
        body: 'test body'
      }
    });
  });
});
