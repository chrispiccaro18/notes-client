import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Notes from '../components/notes/Notes';
import { fetchNotes } from '../actions/notesActions';
import { selectNotesList, selectNotesLoading } from '../selectors/notesSelectors';

class AllNotes extends PureComponent{
  static propTypes = {
    notes: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    fetch: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    const { notes, loading } = this.props;
    if(loading) <h1>Loading</h1>;
    return (
      <Notes notes={notes} />
    );
  }
}

const mapStateToProps = state => ({
  notes: selectNotesList(state),
  loading: selectNotesLoading(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchNotes());
  }
});

export default connect({
  mapStateToProps,
  mapDispatchToProps
})(AllNotes);
