import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-router';
import AppsContainer from '../src/containers/AppsContainer/index';
import config from '../src/config/index';

/* eslint new-cap: 0 */
storiesOf('AppsContainer', module)
  .addDecorator(StoryRouter())
  .add('Standard', () => <AppsContainer apps={ config.icons } />);
