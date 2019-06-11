import React from 'react';
import PropTypes from 'prop-types';

function NoteDetail({ note }) {
  const { title, body } = note;
  return (
    <section>
      <h1>{title}</h1>
      <p>{body}</p>
    </section>
  );
}

NoteDetail.propTypes = {
  note: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
  })
};

export default NoteDetail;
