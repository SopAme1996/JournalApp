import { noteTypes } from '../types/noteTypes';

const initialState = {
    notes: [],
    active: null
}

export const notesReducer = (state = initialState, action) => {
    switch (action.type) {
        case noteTypes.activeNote:
            return {
                ...state,
                active: {
                    ...action.payload
                },
            }
        case noteTypes.allNotes:
            return {
                ...state,
                notes: [ ...action.payload ],
            }

        default:
            return state;
    }
};