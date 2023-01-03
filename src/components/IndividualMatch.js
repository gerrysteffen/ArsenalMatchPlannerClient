import React from 'react';
import MatchHeader from './MatchHeader.js';
import ReservedTickets from './ReservedTickets.js';

function IndividualMatch({ match, tickets, ticketMethods }) {
  
  return (
    <div>
      <MatchHeader match={match} />
      <div>
        <div className='instructions' >
          {'Step 3 - claim your ticket:'} <span id='step3warning'>Please choose user!</span>
        </div>
        {match.availableTickets ?
            <ReservedTickets tickets={tickets} ticketMethods={ticketMethods} /> : 
            (
              <div className='no-tickets'>
                <div>Season tickets not applicable for this match.</div>
                <div>Tickets only applicable for Premier League </div>
                <div>home games or the first 7 rounds of FA Cup.</div>
              </div>
            )
          }
      </div>
    </div>
  );
}

export default IndividualMatch;