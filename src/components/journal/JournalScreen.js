import React from 'react'
import { NothingSelected } from './NothingSelected';
import { Sidebar } from './Sidebar';
import { NoteScreen } from '../notes/NoteScreen';
import { useSelector } from 'react-redux';
import { btnMenu } from '../../helpers/btnMenu';

export const JournalScreen = () => {
  const { active } = useSelector(state => state.notes);

  const handleMenu = () => {
    btnMenu();
  }

  return (
    <div className="journal__main-content animate__animated animate__fadeIn animate__faster">
      <Sidebar />

      <main>
        {active === null ? <NothingSelected /> : <NoteScreen />}
      </main>

      <div className="btn-menu" onClick={handleMenu}>
        <i className="fas fa-arrow-alt-circle-right" id="menu"></i>
      </div>
    </div>
  );
}
