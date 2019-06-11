import React from 'react';
import PropTypes from 'prop-types';
import Note from './Note';

function Notes({ notes }) {
  const noteLis = notes.map(note => (
    <li key={note._id}>
      <Note note={note} />
    </li>
  ));
  return (
    <ul>
      {noteLis}
    </ul>
  );
}

Notes.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
  }))
};

export default Notes;
