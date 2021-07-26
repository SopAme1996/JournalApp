import React from 'react'
import { JournalEntry } from './JournalEntry';
// import { useSelector, useDispatch } from 'react-redux';

export const JournalEntries = () => {
    // const dispatch = useDispatch();
    // const { active } = useSelector(state => state.notes);

    const handleSelect = (e) => {
        console.log(e);
    }

    const entries = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    return (
        <div className="journal__entries" onClick = {handleSelect}>
            {
                entries.map(value => (
                    <JournalEntry key={value}/>
                ))
            }
        </div>
    )
}
