import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Note({ note }) {
  return (
    <Link to={`/note/${note._id}`}>
      <p>{note.title}</p>
    </Link>
  );
}

Note.propTypes = {
  note: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
  })
};

export default Note;
