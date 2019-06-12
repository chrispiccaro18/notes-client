import notesReducer from './notesReducer';
import { NEW_NOTE_PENDING, NEW_NOTE, FETCH_NOTES_PENDING, FETCH_NOTES } from '../actions/notesActions';

jest.mock('../services/notesApi.js', () => ({
  getNotes() {
    return Promise.resolve([]);
  } 
}));

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
  
  it('can handle a fetch notes pending', () => {
    expect(notesReducer(initialState, {
      type: FETCH_NOTES_PENDING
    })).toEqual({
      loading: true,
      list: []
    });

    expect(initialState).toEqual({
      loading: false,
      list: []
    });
  });

  it('can handle fetch notes action', () => {
    expect(notesReducer({ ...initialState, loading: true }, {
      type: FETCH_NOTES,
      payload: [{ title: 'hi', body: 'there' }]
    })).toEqual({
      loading: false,
      list: [{ title: 'hi', body: 'there' }]
    });
  });
});
