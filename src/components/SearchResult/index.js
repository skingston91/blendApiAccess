import React from 'react';
import PropTypes from 'prop-types';
import DummyLoadingBar from '../DummyLoadingBar';
import './styles.less';

const SearchResult = ({ result, error, loading }) => {
  console.log(result, error, loading);
  if (error) {
    return (
      <p>
        { 'Error!' }
      </p>
    );
  }
  if (loading) {
    return (
      <p>
        { 'Loading your data now!' }
      </p>
    );
  }
  return null;
}

SearchResult.propTypes = {
  result: PropTypes.object,
  error: PropTypes.bool,
  loading: PropTypes.bool,
};

export default SearchResult;
