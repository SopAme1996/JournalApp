import React from 'react';
import { useDispatch } from 'react-redux';
import { noteActive } from '../../actions/notes';
import moment from 'moment';


export const JournalEntry = ({ body, date, id, title, url }) => {
  const dispatch = useDispatch();
  const formatDate = moment(date);


  const handleSelectedNote = () => {
    dispatch(noteActive(id, { title, body, date, url }));
  }

  return (
    <div className="journal__entry animate__animated animate__fadeIn animate__faster" onClick={handleSelectedNote}>
      <figure
        className="journal__entry-picture"
        style={{
          backgroundSize: "cover",
          backgroundImage:
            `url(${url})`,
          backgroundPosition: "center"
        }}
      >
      </figure>
      <div className="journal__entry-body">
        <p className="journal__entry-title">{title}</p>
        <p className="journal__entry-content">
          {body}
        </p>
      </div>

      <div className="journal__entry_date-box">
        <span>{formatDate.format('dddd')}</span>
        <h4>{formatDate.format('Do')}</h4>
      </div>
    </div>
  );
}
