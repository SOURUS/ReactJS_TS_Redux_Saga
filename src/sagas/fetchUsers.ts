import { call, put } from 'redux-saga/effects';

import { requestGetUsers } from '../actions/index'
import API from '../core/api';


export function* fetchUsers() {
    try {
        const result = yield call(API.fetchUsers);
        yield put(requestGetUsers(result.data));
    } catch (err) {
        console.error(err);
    }
}

