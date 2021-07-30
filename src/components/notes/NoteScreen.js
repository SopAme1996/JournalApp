import React, { useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux';

import { NotesAppBar } from './NotesAppBar'
import { useForm } from '../../hooks/useForm';
import { noteActive } from '../../actions/notes';
import { startDelete } from '../../asincrono/notes';

export const NoteScreen = () => {
    const dispatch = useDispatch();

    const { active: note } = useSelector(state => state.notes);
    const [formValue, handleInputChange, reset] = useForm(note);
    const { body, title } = formValue;

    const activeId = useRef(note.id);
    useEffect(() => {
        if (note.id !== activeId.current) {
            reset(note);
            activeId.current = note.id;
        }
    }, [note, reset]);

    useEffect(() => {
        dispatch(noteActive(formValue.id, { ...formValue }));
    }, [formValue, dispatch])

    const handleDelete = () => {
        dispatch(startDelete(formValue.id));
    }


    return (
        <div className="notes__main-content">
            <NotesAppBar />
            <div className="notes__content">
                <input
                    type="text"
                    placeholder="Some awesome title"
                    className="notes__title-input"
                    autoComplete="off"
                    onChange={handleInputChange}
                    value={title}
                    name='title'
                />

                <textarea
                    placeholder="What happened today"
                    className="notes__textarea"
                    onChange={handleInputChange}
                    value={body}
                    name='body'
                ></textarea>

                {
                    note.url &&
                    <div className="notes__image">
                        <img
                            src={note.url}
                            alt='img'
                        />
                    </div>
                }


            </div>

            <button className="btn btn-danger" onClick={handleDelete}> Delete </button>
        </div>
    )
}
