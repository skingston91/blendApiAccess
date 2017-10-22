import React from 'react';
import PropTypes from 'prop-types';
import './styles.less';

const SearchResult = ({ creator, name, thumbnail, preview }) => (
  <div className="searchResultContainer">
    <a href={ preview }>
      <img src={ thumbnail } alt="thumbnail of video" className="searchResultThumbNail" />
      <h2 className="searchResultName"> { `Video Name: ${ name }` } </h2>
      <p className="searchResultCreater">{ `Video Creater: ${ creator }` } </p>
    </a>
  </div>
);

SearchResult.propTypes = {
  creator: PropTypes.string,
  name: PropTypes.string,
  thumbnail: PropTypes.string,
  preview: PropTypes.string,
};

export default SearchResult;
