import React from 'react';
import PropTypes from 'prop-types';

import DataContainer from '../containers/DataContainer';
import SearchResult from './SearchResult';

const Data = ({ match: { params } }) =>
  <DataContainer { ...params } render={ SearchResult } />;

Data.propTypes = {
  match: PropTypes.object,
};

export default Data;
