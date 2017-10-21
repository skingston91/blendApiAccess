import React from 'react';
import PropTypes from 'prop-types';
import './styles.less';

const SearchResult = ({ result, error, loading }) => {
  console.log(result, error, loading);
  if (error) {
    return (
      <p> Error! </p>
    );
  }
  if (loading) {
    return (
      <div>
        <p> Loading your data now! </p>
      </div>
    );
  }
  if (result && result.data) {
    return (
      <div>
        <h1> hello </h1>
        { JSON.stringify(result.data, null, 2) }
      </div>
    );
  }
  return null;
};

SearchResult.propTypes = {
  result: PropTypes.object,
  error: PropTypes.bool,
  loading: PropTypes.bool,
};

export default SearchResult;
