import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Alerts from '../src/components/reactstrap/examples/Alert';
import AlertLink from '../src/components/reactstrap/examples/AlertLink';
import AlertContent from '../src/components/reactstrap/examples/AlertContent';
import AlertDismiss from '../src/components/reactstrap/examples/AlertDismiss';
import AlertUncontrolledDismiss from '../src/components/reactstrap/examples/AlertUncontrolledDismiss';
import AlertFadeless from '../src/components/reactstrap/examples/AlertFadeless';

storiesOf('Alerts', module)
  .add('regular styles', () => (
    <Alerts />
  ))
  .add('link color', () => (
    <Alerts />
  ))
  .add('additional content', () => (
    <Alerts />
  ))
  .add('dismissing', () => (
    <Alerts />
  ))
  .add('uncontrolled [disable] alerts', () => (
    <Alerts />
  ))
  .add('alerts without fade', () => (
    <Alerts />
  ))