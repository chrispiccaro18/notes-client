import { post, get } from './request';

const BASE_PATH = '/api/v1/notes';

export const createNote = note => {
  return post(`${BASE_PATH}`, note);
};

export const getNotes = () => {
  return get(BASE_PATH);
};
