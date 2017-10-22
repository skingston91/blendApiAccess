import React from 'react';
import PropTypes from 'prop-types';
import './styles.less';

const PageInformation = ({ pageNumber, pageSize, totalEntries, totalPages }) => (
  <div className="pageInformationContainer">
    <h2 className="pageInformationText">{ `Page Number: ${ pageNumber }` } </h2>
    <h2 className="pageInformationText">{ `Page Size: ${ pageSize }` } </h2>
    <h2 className="pageInformationText">{ `Total Entries: ${ totalEntries }` } </h2>
    <h2 className="pageInformationText">{ `Total Pages: ${ totalPages }` } </h2>
  </div>
);

PageInformation.propTypes = {
  pageNumber: PropTypes.number,
  pageSize: PropTypes.number,
  totalEntries: PropTypes.number,
  totalPages: PropTypes.number,
};

export default PageInformation;
