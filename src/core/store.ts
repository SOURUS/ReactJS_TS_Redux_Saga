import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import { fetchUsers } from '../sagas/fetchUsers';

export default function configureStore() {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
        rootReducer,
        applyMiddleware(
            sagaMiddleware
        )
    );
    sagaMiddleware.run(fetchUsers);
    return store;
};