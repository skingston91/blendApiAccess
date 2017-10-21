import { configure } from '@storybook/react';
/* eslint global-require: 0*/
function loadStories() {
  require('../stories');
}

configure(loadStories, module);
