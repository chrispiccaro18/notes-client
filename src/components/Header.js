import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectSession } from '../selectors/sessionSelectors';
import { login } from '../services/auth';

class Header extends PureComponent {
  static propTypes = {
    session: PropTypes.shape({
      username: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      token: PropTypes.string.isRequired
    }).isRequired
  }

  render() {
    const { username, image, token } = this.props.session;
    if(!token) {
      return (
        <header>
          <section>
            <Link to="#" onClick={login}>Sign In/Up</Link>
          </section>
        </header>
      );
    }
    return (
      <header>
        <nav>
          <Link to="/home">Home</Link>
        </nav>
        <section>
          <p>{username}</p>
          <img src={image} alt={`image of ${username}`} />
        </section>
      </header>
    );
  }
}

const mapStateToProps = state => ({
  session: selectSession(state)
});

export default connect(
  mapStateToProps
)(Header);
