import React from 'react';

function Reservation({reservation}) {
  return (
    <div>
      <div>
        For: {reservation.user},
        Number of Tickets: {reservation.numberOfTickets}
      </div>
      <div>
        <button>Delete</button>
      </div>
    </div>
  );
}

export default Reservation;