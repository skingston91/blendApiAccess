import { renderComponent, expect } from '../test_helper';
import App from '../../src/containers/App';
/* eslint-disable no-unused-expressions */

describe('App', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(App);
  });

  it('renders something', () => {
    expect(component).to.exist;
  });
});
