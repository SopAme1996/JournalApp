import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startSaveNotes, startUploading } from '../../asincrono/notes'
import { fechaActualText } from '../../helpers/fechaActual';
import Swal from 'sweetalert2';

export const NotesAppBar = () => {
    const dispatch = useDispatch();
    const { active } = useSelector(state => state.notes);

    const handleSave = () => {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
        })
        dispatch(startSaveNotes(active));
    }

    const handlePictureClick = () => {
        document.querySelector('#fileSelector').click();
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0];

        if (file) {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your work has been saved',
                showConfirmButton: false,
                timer: 1500
            })
            dispatch(startUploading(file));
        }
    }

    return (
        <div className="notes__appbar">
            <span>{fechaActualText()}</span>
            <input id='fileSelector' type="file" style={{ display: 'none' }} onChange={handleFileChange} name='file' />
            <div>
                <button className="btn" onClick={handlePictureClick}>
                    Picture
                </button>

                <button className="btn" onClick={handleSave}>
                    Save
                </button>
            </div>
        </div>
    )
}
