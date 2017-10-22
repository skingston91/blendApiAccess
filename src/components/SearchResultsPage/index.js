import React from 'react';
import PropTypes from 'prop-types';
import './styles.less';
import SearchResult from '../SearchResult';
import PageInformation from '../PageInformation';

const SearchResultsPage = ({ result, error, loading }) => {
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
        <h1 className="searchResultTitle"> Blend API Request </h1>
        { result.data.page.totalEntries === 0 && <h1> No Results Found </h1> }
        {
          result.data.items && result.data.items.map((item) => (
            <SearchResult key={ item.id } { ...item } />
          ))
        }
        { result.data.page && <PageInformation { ...result.data.page } /> }
      </div>
    );
  }
  return null;
};

SearchResultsPage.propTypes = {
  result: PropTypes.object,
  error: PropTypes.bool,
  loading: PropTypes.bool,
};

export default SearchResultsPage;
