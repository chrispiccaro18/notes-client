export const createNote = note => {
  return Promise.resolve({
    _id: '7890',
    ...note
  });
};
