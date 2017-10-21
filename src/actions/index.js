import {
  FETCH_DATA_STARTING,
  FETCH_DATA_DONE,
  FETCH_DATA_FAILED,
} from './types';

export function fetchData(apiName, props) {
  return (dispatch, getState, api) => {
    // console.log(api);
    const selectedAPI = api[apiName];
    dispatch({ type: FETCH_DATA_STARTING, payload: { ...props } });
    return selectedAPI
      .fetchData({ ...props })
      .then(
        result =>
          dispatch({ type: FETCH_DATA_DONE, payload: { ...props, result } }),
        error =>
          dispatch({ type: FETCH_DATA_FAILED, payload: { ...props, error } })
      );
  };
}
