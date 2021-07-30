import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { JournalEntries } from './JournalEntries';
import { startLogout } from '../../asincrono/auth';
import { startNewNote } from '../../asincrono//notes';
import { btnMenu } from '../../helpers/btnMenu';

export const Sidebar = () => {
    const dispatch = useDispatch();
    const { name } = useSelector(state => state.auth);

    const handleLogout = () => {
        dispatch(startLogout());
    };

    const handleAddNew = () => {
        dispatch(startNewNote());
        const menu = document.getElementById('journal');
        menu.className = 'journal__sidebar';
        btnMenu();
    }

    return (
        <aside className="journal__sidebar" id='journal'>
            <div className="journal__sidebar-navbar" >
                <h3 className="mt-5">
                    <i className="far fa-moon"></i>
                    <span> {name} </span>
                </h3>

                <button className="btn mt-5 btn-logOut" onClick={handleLogout}>
                    Logout
                </button>
            </div>

            <div className="journal__new-entry" onClick={handleAddNew}>
                <i className="far fa-calendar-plus fa-5x"></i>
                <p className="mt-5">New Entry</p>
            </div>

            <JournalEntries />
        </aside>
    );
}
