import { createAction } from 'promise-middleware-redux';
import { getNote } from '../services/notesApi';

export const [
  fetchNote,
  FETCH_NOTE,
  FETCH_NOTE_PENDING
] = createAction('FETCH_NOTE', getNote);
