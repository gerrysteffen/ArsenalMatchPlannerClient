import React, { useState } from 'react';

function Reservation({ reservation, tickets }) {
  const [editMode, setEditMode] = useState(false)

  const handleEdit = () => {
    setEditMode(!editMode)
  }

  const handleEditSubmit = () => {
    console.log('submit')
  }

  return (
    <div>
      {!editMode ? (
        <div>
          <div>For: {reservation.user},</div>
          <div>Number of Tickets: {reservation.numberOfTickets}</div>
        </div>
      ) : (
        <div>
          <form>
            <label>For:</label>
            <input id='user' placeholder={reservation.user}></input>
            <br></br>
            <label>Number of Tickets:</label>
            <input id='numberOfTickets' placeholder={reservation.numberOfTickets}></input>
          </form>
        </div>
      )}
      <div>
        <button onClick={()=>tickets.delete(reservation._id)}>Delete</button>
        <button onClick={()=>handleEdit()}>{!editMode ? 'Edit' : 'Back'}</button>
        {editMode && <button onClick={()=>handleEditSubmit()}>Submit</button>}
      </div>
    </div>
  );
}

export default Reservation;
