import { combineReducers } from 'redux';

import blogs from './blogs';
import auth from './auth';
import users from './users';

export default combineReducers({
    blogs,auth,users
});