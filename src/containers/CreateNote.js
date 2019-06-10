import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import NoteForm from '../components/notes/NoteForm';
import { newNote } from '../actions/notesActions';

class CreateNote extends PureComponent {
  static propTypes = {
    createNote: PropTypes.func.isRequired
  }

  state = {
    title: '',
    body: ''
  }

  handleSubmit = event => {
    event.preventDefault();
    const { title, body } = this.state;
    this.props.createNote({ title, body });
    this.setState({ title: '', body: '' });
  }

  render() {
    const { title, body } = this.state;
    const noteFormProps = {
      onSubmit: this.handleSubmit,
      onChange: this.handleChange,
      title,
      body,
      submitText: 'Create Note'
    };
    return (
      <NoteForm props={noteFormProps} />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  createNote(note) {
    dispatch(newNote(note));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(CreateNote);