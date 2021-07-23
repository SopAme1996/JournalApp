
import { msgtErrorTypes, loadingTypes } from '../types/authTypes';

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

export const startLoading = () => {
    return {
        type: loadingTypes.uiStartLoading,
        payload: true
    }
}

export const finishLoading = () => {
    return {
        type: loadingTypes.uiFinishLoading,
    }
}