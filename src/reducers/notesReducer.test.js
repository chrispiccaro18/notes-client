import notesReducer from './notesReducer';
import { NEW_NOTE_PENDING } from '../actions/notesActions';

describe('notes reducer tests', () => {
  it('can handle a new notes pending', () => {
    const initialState = {
      loading: false,
      list: []
    };
    expect(notesReducer(initialState, {
      type: NEW_NOTE_PENDING
    })).toEqual({
      loading: true,
      list: []
    });
  });
});
