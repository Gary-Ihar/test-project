import { observer } from 'mobx-react';
import React from 'react';
import { store } from './store';

const MyOrders = observer(function MyOrders() {
  // eslint-disable-next-line no-empty-pattern
  const {} = store;
  return <div>MyOrders</div>;
});

export default MyOrders; // modules - only default, use via React.lazy
