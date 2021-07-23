
import { msgtErrorTypes, loadingTypes } from '../types/authTypes';

const initialState = {
    loading: false,
    msError:  null,
}

export const uiReducer = (state = initialState, action) => {
    switch (action.type) {
        case msgtErrorTypes.uiSetError:
            return {
                ...state,
                msError: action.payload,

            }
        case msgtErrorTypes.uiRemoveError:
            return {
                ...state,
                msError: null,
            }
        case loadingTypes.uiStartLoading:
            return {
                ...state,
                loading: action.payload,
            }
        case loadingTypes.uiFinishLoading:
            return {
                ...state,
                loading: false
            }

        default:
            return state;
    }
}