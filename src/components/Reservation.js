import React, { useState } from 'react';

function Reservation({ reservation, tickets }) {
  const [editMode, setEditMode] = useState(false)

  const today = new Date().toLocaleString('en-GB', {
    timeZone: 'Europe/London',
  }).slice(0,10)

  return (
    <div>
      {!editMode ? (
        <div>
          <div>For: {reservation.user}</div>
          <div>Number of Tickets: {reservation.numberOfTickets}</div>
          <div>Comments: {reservation.comments}</div>
          <div>Created: {reservation.createdTimestamp.shortDate === today? 'Today' : reservation.createdTimestamp.shortDate}</div>
          <div>Last edited: {reservation.updatedTimestamp.shortDate === today? 'Today '+reservation.updatedTimestamp.time : reservation.updatedTimestamp.date}</div>
        </div>
      ) : (
        <div>
          <form onSubmit={(event)=>{
            tickets.edit(event, reservation);
            setEditMode(!editMode)
          }}>
            <label>For:</label>
            <input type='text' id='user' placeholder={reservation.user}></input>
            <br></br>
            <label>Number of Tickets:</label>
            <input type='text' id='numberOfTickets' placeholder={reservation.numberOfTickets}></input>
            <br></br>
            <label>Comments:</label>
            <input type='text' id='comments' placeholder={reservation.comments}></input>
            <br></br>
            <input type='submit'></input>
          </form>
        </div>
      )}
      <div>
        <button onClick={()=>tickets.delete(reservation._id)}>Delete</button>
        <button onClick={()=>setEditMode(!editMode)}>{!editMode ? 'Edit' : 'Back'}</button>
      </div>
    </div>
  );
}

export default Reservation;
