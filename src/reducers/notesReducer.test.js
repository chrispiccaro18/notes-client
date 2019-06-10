import notesReducer from './notesReducer';
import { NEW_NOTE_PENDING, NEW_NOTE } from '../actions/notesActions';

describe('notes reducer tests', () => {
  const initialState = {
    loading: false,
    list: []
  };

  it('can handle a new notes pending', () => {
    expect(notesReducer(initialState, {
      type: NEW_NOTE_PENDING
    })).toEqual({
      loading: true,
      list: []
    });

    expect(initialState).toEqual({
      loading: false,
      list: []
    });
  });

  it('can handle new note action', () => {
    expect(notesReducer({ ...initialState, loading: true }, {
      type: NEW_NOTE,
      payload: { title: 'hi', body: 'there' }
    })).toEqual({
      loading: false,
      list: [{ title: 'hi', body: 'there' }]
    });
  });
});
