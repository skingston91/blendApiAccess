import React from 'react';
import PropTypes from 'prop-types';

import DataContainer from '../containers/DataContainer';
import SearchResultsPage from './SearchResultsPage';

const Data = ({ match: { params } }) =>
  <DataContainer { ...params } render={ SearchResultsPage } />;

Data.propTypes = {
  match: PropTypes.object,
};

export default Data;
