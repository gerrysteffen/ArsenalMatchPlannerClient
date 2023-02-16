import React, { useState } from 'react';

function Reservation({ reservation, ticketMethods }) {
  const [editMode, setEditMode] = useState(false);

  const today = new Date()
    .toLocaleString('en-GB', {
      timeZone: 'Europe/London',
    })
    .slice(0, 10);

  return (
    <div>
      <div className="ticket">
        {!editMode ? (
          <div>
            <div className="reservation-info">
              <div>User:</div>
              <div>{reservation.user}</div>
              <div>#Tickets:</div>
              <div>{reservation.numberOfTickets}</div>
              <div>Comments:</div>
              <div>{reservation.comments}</div>
            </div>
            <button
              className="button ticket-top-right"
              onClick={() => setEditMode(!editMode)}
            >
              Edit
            </button>
            <button
              className="button ticket-bottom-right"
              onClick={() => ticketMethods.delete(reservation._id)}
            >
              Delete
            </button>
          </div>
        ) : (
          <div>
            <form
              className="reservation-info"
              onSubmit={(event) => {
                ticketMethods.edit(event, reservation);
                setEditMode(!editMode);
              }}
            >
              <label>User:</label>
              <input
                type="text"
                id="user"
                placeholder={reservation.user}
              ></input>
              <label>#Tickets:</label>
              <input
                type="text"
                id="numberOfTickets"
                placeholder={reservation.numberOfTickets}
              ></input>
              <label>Comments:</label>
              <input
                type="text"
                id="comments"
                placeholder={reservation.comments}
              ></input>
              <button
                className="button ticket-top-right"
                onClick={() => setEditMode(!editMode)}
              >
                Back
              </button>
              <input
                className="button ticket-bottom-right"
                type="submit"
              ></input>
            </form>
          </div>
        )}
      </div>
      <div className="created-tag">
        <div>
          {'Created: '}
          {reservation.createdTimestamp.shortDate !== today
            ? reservation.createdTimestamp.shortDate
            : 'Today ' + reservation.createdTimestamp.time}
        </div>
        {reservation.updatedTimestamp.date !==
          reservation.createdTimestamp.date && (
          <div>
            {'Edited: '}
            {reservation.updatedTimestamp.shortDate !== today
              ? reservation.updatedTimestamp.date
              : reservation.updatedTimestamp.shortDate !==
                reservation.createdTimestamp.shortDate
              ? 'Today ' + reservation.updatedTimestamp.time
              : reservation.updatedTimestamp.time}
          </div>
        )}
      </div>
    </div>
  );
}

export default Reservation;
