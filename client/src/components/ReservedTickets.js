import React from 'react';
import Reservation from './Reservation';

function ReservedTickets({ match, tickets, ticketMethods }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    let numTickets = event.target[0].value;
    if (numTickets > match.availableTickets - match.claimedTickets) {
      numTickets = false;
    }
    ticketMethods.create(numTickets)
  };

  return (
    <div>
      <div>
        <form
          className='dropdown-line'
          onSubmit={(event) => handleSubmit(event)}
        >
          <select className='dropdown'>
            <option value='1'>1 ticket</option>
            <option value='2'>2 tickets</option>
            <option value='3'>3 tickets</option>
            <option value='4'>4 tickets</option>
          </select>
          <input className='button' type='submit'></input>
        </form>
      </div>
      <div>
        {tickets.length > 0 && (
          <div>
            <div className='instructions'>
              {'Previous reservations for this match:'}
            </div>
            {tickets.map((reservation) => {
              return (
                <Reservation
                  key={reservation._id}
                  reservation={reservation}
                  ticketMethods={ticketMethods}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default ReservedTickets;
