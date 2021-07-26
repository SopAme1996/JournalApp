import { db } from '../firebase/firebase-config';
import { noteActive } from '../actions/notes';

export const startNewNote = () => {
    return async (dispatch, getState) => {
        const uid = getState().auth.uid;

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime()
        };

        const doc = await db.collection(`${uid}/journal/notes`).add(newNote);
        dispatch(noteActive(doc.id, newNote));
    }
}