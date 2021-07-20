
import { msgtErrorTypes } from '../types/authTypes';

export const setError = (err) => {
    return {
        type: msgtErrorTypes.uiSetError,
        payload: err
    }
}

export const removeError = () => {
    return {
        type: msgtErrorTypes.uiRemoveError,
    }
}