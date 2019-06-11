import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import NoteDetail from '../components/notes/NoteDetail';
import { fetchNote } from '../actions/noteDetailActions';
import { selectNoteDetail, selectNoteDetailLoading } from '../selectors/noteSelectors';

class DisplayNote extends PureComponent{
  static propTypes = {
    note: PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired
    }).isRequired,
    loading: PropTypes.bool.isRequired,
    match: PropTypes.object.isRequired,
    fetch: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.fetch(this.props.match.params.id);
  }

  render() {
    const { note, loading } = this.props;
    if(loading) return <h1>Loading</h1>;
    return (
      <NoteDetail note={note} />
    );
  }
}

const mapStateToProps = (state) => ({
  note: selectNoteDetail(state),
  loading: selectNoteDetailLoading(state)
});

const mapDispatchToProps = dispatch => ({
  fetch(_id) {
    dispatch(fetchNote(_id));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DisplayNote);
