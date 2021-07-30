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
                notes: [...action.payload],
            }
        case noteTypes.updateNote:
            return {
                ...state,
                notes: state.notes.map(note => note.id === action.payload.id ? action.payload.note : note)
            }

        case noteTypes.deleteNote:
            return {
                ...state,
                notes: state.notes.filter(note => note.id !== action.payload),
                active: null,
            }
        
        case noteTypes.notesLogoutCleaning:
            return {
                notes: [],
                active: null,
            }

        default:
            return state;
    }
};