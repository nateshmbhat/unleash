import React, { PropTypes } from 'react';
import Menu from '../containers/Menu';

const LoggedWrapper = ({ children }) => (
  <div>
    <Menu />
    <div>
      {children}
    </div>
  </div>
);

LoggedWrapper.propTypes = {
  children: PropTypes.node,
};

export default LoggedWrapper;
