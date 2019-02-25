import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './core/store';
import User from './components/User';
import { requestGetUsers } from './actions';

ReactDOM.render(
    <Provider store={configureStore()}>
        <User getUsers={requestGetUsers}/>
    </Provider>,
    document.getElementById('root')
);