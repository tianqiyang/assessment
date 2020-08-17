import { 
    SIGN_IN, 
    SIGN_OUT,
    CREATE_RECORD,
    FETCH_RECORDS
} from './types';
import records from '../api/localbase';

export const signIn = userId => {
    return {
        type: SIGN_IN,
        payload: userId
    };
};

export const signOut = () => {
    return {
        type: SIGN_OUT
    };
};

export const createRecord = (formValues) => async (dispatch, getState) => {
    const { userId } = getState().auth;
    const response = await records.post('/records', { ...formValues, userId });

    dispatch({ type: CREATE_RECORD, payload: response.data});
};

export const fetchRecords = () => async (dispatch) => {
    const response = await records.get('/records');
    const filted = response.data;

    dispatch({ type: FETCH_RECORDS, payload: filted});
};