import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { login } from '../../services/auth';
import { selectToken } from '../../selectors/sessionSelectors';

export const withSession = Component => {
  class withSession extends PureComponent {
    static propTypes = {
      token: PropTypes.string.isRequired,
      match: PropTypes.object
    }

    componentDidMount() {
      if(!this.props.token) {
        login();
      }
    }

    render() {
      if(!this.props.token) return <h1>Not Logged In</h1>;
      return (
        <Component match={this.props.match} />
      );
    }

  }

  const mapStateToProps = state => ({
    token: selectToken(state)
  });

  return connect(
    mapStateToProps
  )(withSession);
};
