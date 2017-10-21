import React from 'react';
import { Link } from 'react-router-dom';
import './styles.less';

export default () => (
  <div className="background">
    <Link to="/">
        <div className="list-item-container">
            Sorry 404!
        </div>
    </Link>
  </div>
);
