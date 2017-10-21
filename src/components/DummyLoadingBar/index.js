import React from 'react';
import PropTypes from 'prop-types';
import './styles.less';

const DummyLoadingBar = ({ progress }) =>
  <div className="progressbar">
    <div className="progress" style={{ width: `${ progress }%` }} />
  </div>;

DummyLoadingBar.propTypes = {
  progress: PropTypes.number.isRequired,
};

export default DummyLoadingBar;
