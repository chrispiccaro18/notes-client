import { selectNoteDetail, selectNoteDetailLoading } from './noteSelectors';

describe('note selectors tests', () => {
  const state = {
    note: {
      loading: true,
      detail: {
        _id: 'testId',
        title: 'test title',
        body: 'test body'
      }
    }
  };
  it('selects note detail', () => {
    expect(selectNoteDetail(state)).toEqual({
      _id: 'testId',
      title: 'test title',
      body: 'test body'
    });
  });

  it('selects note detail loading', () => {
    expect(selectNoteDetailLoading(state)).toEqual(true);
  });
});
