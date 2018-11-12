import React from 'react';
import { init } from '@rematch/core';
import { Provider } from 'react-redux';
import a from './b';
import b from './a'

import Count from './Count'
// generate Redux store
const store = init({
    models: { a, b },
});

const Root = () => (
    <Provider store={store}>
        <Count />
    </Provider>
);

export default Root;
