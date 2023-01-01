import React from 'react';
import Reservation from './Reservation';

function ReservedTickets({ tickets }) {
  return (
    <div className="reserved-tickets">
      <div>
        <form onSubmit={(event) => tickets.create(event)}>
          <label>Claim ticket: </label>
          <select>
            <option value="1">1 ticket</option>
            <option value="2">2 tickets</option>
            <option value="3">3 tickets</option>
            <option value="4">4 tickets</option>
          </select>
          <input type="submit"></input>
        </form>
      </div>
      <div>{tickets.reservations.length > 0 && 'Reserved tickets:'}</div>
      <div>
        {tickets.reservations.length > 0 &&
          tickets.reservations.map((reservation) => {
            return (
              <Reservation key={reservation._id} reservation={reservation} tickets={tickets} />
            );
          })}
      </div>
    </div>
  );
}

export default ReservedTickets;
