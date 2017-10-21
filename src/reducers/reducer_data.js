import {
  FETCH_DATA_STARTING,
  FETCH_DATA_DONE,
  FETCH_DATA_FAILED,
} from '../actions/types';

const INITIAL_STATE = {};

export default function (state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case FETCH_DATA_STARTING:
      return startLoadingData(state, payload);
    case FETCH_DATA_FAILED:
      return failedLoadingData(state, payload);
    case FETCH_DATA_DONE:
      return doneLoadingData(state, payload);
    default:
      return state;
  }
}

function startLoadingData(state, { type, id }) {
  return updateData(state, type, id, () => ({
    loading: true,
    error: false,
  }));
}

function failedLoadingData(state, { type, id, error }) {
  return updateData(state, type, id, () => ({
    loading: false,
    error,
  }));
}

function doneLoadingData(state, { type, id, result }) {
  return updateData(state, type, id, () => ({
    loading: false,
    error: false,
    result,
  }));
}

function updateData(state, type, id, reducer) {
  const newState = { ...state };
  newState[id] = Object.assign({}, reducer(newState[id] || {}));
  return newState;
}
