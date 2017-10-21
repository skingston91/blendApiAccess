/**
 * Usage
 * ===
 * <DataContainer render={SomeOtherComponent} id={id} />
 *
 * This will render <SomeOtherComponent data={{ result, error, loading }} id={id} />
 **/

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchData } from '../actions';

export class DataContainer extends React.Component {
  componentWillMount() {
    this.loadData(this.props);
  }
  componentWillReceiveProps(newProps) {
    this.loadData(newProps);
  }
  loadData({ data: { result, error, loading }, id }) {
    if (result || error || loading) return;
    return this.props.fetchData('api', { id });
  }
  render() {
    const { render: Component, data } = this.props;
    return <Component { ...data } />;
  }
}

DataContainer.propTypes = {
  data: PropTypes.shape({
    result: PropTypes.any,
    error: PropTypes.any,
    loading: PropTypes.bool,
  }).isRequired,
  id: PropTypes.number.isRequired,
};

function mapStateToProps({ data }, { id }) {
  return {
    data: (data && data[id]) || {},
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchData: (apiName, object) => dispatch(fetchData(apiName, object)),
  };
}

DataContainer.propTypes = {
  fetchData: PropTypes.func,
  render: PropTypes.func,
};

exports.default = connect(
  mapStateToProps,
  mapDispatchToProps
)(DataContainer);
