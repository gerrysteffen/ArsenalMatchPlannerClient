import React from 'react';
import Reservation from './Reservation';

function ReservedTickets({ tickets }) {
  return (
    <div>
      <div>
        <form className='dropdown-line' onSubmit={(event) => tickets.create(event)}>
          <select className='dropdown'>
            <option value="1">1 ticket</option>
            <option value="2">2 tickets</option>
            <option value="3">3 tickets</option>
            <option value="4">4 tickets</option>
          </select>
          <input className='button' type="submit"></input>
        </form>
      </div>
      <div>
        <div className='instructions'>
          {'Previous reservations for this match:'}
        </div>
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
