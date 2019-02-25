import { combineReducers } from 'redux';
import fetchUsers from './fetchUsers';

export default combineReducers({
    users: fetchUsers
});
