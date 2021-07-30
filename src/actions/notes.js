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

export const refreshNotes = (id, note) => {
    return {
        type: noteTypes.updateNote,
        payload: {
            id,
            note: {
                id,
                ...note
            }
        }
    }
}


export const deleteNote = (note_id) => {
    return {
        type: noteTypes.deleteNote,
        payload: note_id
    }
}

export const notesLogout = () => {
    return {
        type: noteTypes.notesLogoutCleaning,
    }
}