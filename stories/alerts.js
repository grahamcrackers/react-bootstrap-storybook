import React from 'react';
import { storiesOf } from '@storybook/react';
//import { action } from '@storybook/addon-actions';
import Alerts from '../src/reactstrap/examples/Alert';
import AlertLink from '../src/reactstrap/examples/AlertLink';
import AlertContent from '../src/reactstrap/examples/AlertContent';
import AlertDismiss from '../src/reactstrap/examples/AlertDismiss';
import AlertUncontrolledDismiss from '../src/reactstrap/examples/AlertUncontrolledDismiss';
import { AlertFadeless } from '../src/reactstrap/examples/AlertFadeless';

storiesOf('Alerts', module)
  .add('regular styles', () => (
    <Alerts />
  ))
  .add('link color', () => (
    <AlertLink />
  ))
  .add('additional content', () => (
    <AlertContent />
  ))
  .add('dismissing', () => (
    <AlertDismiss />
  ))
  .add('uncontrolled [disable] alerts', () => (
    <AlertUncontrolledDismiss />
  ))
  .add('alerts without fade', () => (
    <AlertFadeless />
  ))