import { db } from '../firebase/firebase-config';
import { noteActive, allNotes, refreshNotes, deleteNote, addNewNote } from '../actions/notes';
import { loadNotes } from '../helpers/loadNotes';
import { fileUpload } from '../helpers/fileUpload';




export const startNewNote = () => {
    return async (dispatch, getState) => {
        const uid = getState().auth.uid;

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(),
            url: ''
        };

        const doc = await db.collection(`${uid}/journal/notes`).add(newNote);
        dispatch(noteActive(doc.id, newNote));
        dispatch(addNewNote(doc.id, newNote));
    }
}

export const startLoadingNotes = () => {
    return async (dispatch, getState) => {
        const uid = getState().auth.uid;
        const notas = await loadNotes(uid);
        dispatch(allNotes(notas));
    }
}

export const startSaveNotes = (note) => {
    return async (dispatch, getState) => {
        const uid = getState().auth.uid;

        if (!note.url) {
            delete note.url;
        }

        const noteToFirestore = { ...note };
        delete noteToFirestore.id;

        await db.doc(`${uid}/journal/notes/${note.id}`).update(noteToFirestore);
        dispatch(refreshNotes(note.id, note));

    }
}

export const startUploading = (file) => {
    return async (dispatch, getState) => {
        const { active: activeNote } = getState().notes;
        const url = await fileUpload(file);
        activeNote.url = url;

        dispatch(startSaveNotes(activeNote));

    }
}


export const startDelete = (note_id) => {
    return async (dispatch, getState) => {
        const uid = getState().auth.uid;
        await db.doc(`${uid}/journal/notes/${note_id}`).delete();
        dispatch(deleteNote(note_id));
    }
}