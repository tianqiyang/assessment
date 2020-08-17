import _ from 'lodash';
import {
    CREATE_RECORD,
    FETCH_RECORDS
} from '../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_RECORDS:
            return { ...state, ..._.mapKeys(action.payload, 'id')};
        case CREATE_RECORD:
            return { ...state, [action.payload.id]: action.payload };
        default:
            return state;
    }
}