import { configure } from '@storybook/react';

import '../node_modules/bootstrap/dist/css/bootstrap.css';

function loadStories() {
  //require('../stories/index.js');
  require('../stories/alerts.js');
  require('../stories/buttons.js');
  // You can require as many stories as you need.
}

configure(loadStories, module);