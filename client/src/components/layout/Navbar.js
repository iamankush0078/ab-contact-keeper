import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';
import ContactContext from '../../context/contact/contactContext';
import { useContext } from 'react';
import { Fragment } from 'react';

const Navbar = ({ icon, title }) => {
  const authContext = useContext(AuthContext);
  const contactContext = useContext(ContactContext);

  const { isAuthenticated, logout, user } = authContext;
  const { clearContacts } = contactContext;

  const onLogout = () => {
    logout();
    clearContacts();
  };

  const authLink = (
    <Fragment>
      <li>Hello {user && user.name} </li>
      <li>
        <a onClick={onLogout} href="#!">
          <i className="fas fa-sign-out-alt"></i>
          <span className="hide-sm">Logout</span>
        </a>
      </li>
    </Fragment>
  );

  const guestLink = (
    <Fragment>
      <li>
        <Link to="/login">Login</Link>
      </li>
      <li>
        <Link to="/register">Register</Link>
      </li>
    </Fragment>
  );
  return (
    <div>
      <nav className="navbar bg-primary">
        <h1>
          <i className={icon}></i>
          {title}
        </h1>
        <ul>{isAuthenticated ? authLink : guestLink}</ul>
      </nav>
    </div>
  );
};
Navbar.defaultProps = {
  title: ' Contact Keeper',
  icon: 'fas fa-id-card-alt'
};
Navbar.proType = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default Navbar;
