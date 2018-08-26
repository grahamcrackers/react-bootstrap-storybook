import { configure } from '@storybook/react';

//import '../src/styles/custom.scss';

function loadStories() {
  require('../stories/index.js');
  require('../stories/alerts.js');
  // You can require as many stories as you need.
}

configure(loadStories, module);