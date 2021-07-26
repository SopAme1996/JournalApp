import { noteTypes } from '../types/noteTypes';

export const noteActive = (id, note) => {
    return {
        type: noteTypes.activeNote,
        payload: {
            id,
            ...note
        }
    }
}


export const allNotes = (notes) => {
    return {
        type: noteTypes.allNotes,
        payload: notes
    }
}