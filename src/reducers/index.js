import { combineReducers } from 'redux';
import authreducer from './authReducer';
import { reducer as formReducer } from 'redux-form';
import recordsReducer from './recordsReducer';

export default combineReducers ({
    auth: authreducer,
    form: formReducer,
    records: recordsReducer
});