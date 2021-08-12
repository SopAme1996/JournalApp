import React, { useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux';

import { NotesAppBar } from './NotesAppBar'
import { useForm } from '../../hooks/useForm';
import { noteActive } from '../../actions/notes';
import { startDelete } from '../../asincrono/notes';
import Swal from 'sweetalert2';

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
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(startDelete(formValue.id));
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })
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
