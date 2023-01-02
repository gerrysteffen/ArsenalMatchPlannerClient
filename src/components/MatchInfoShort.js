import React from 'react';

function MatchInfoShort({match}) {
  return (
    <div className='MatchInfoShort'>
        {match.timestamp.date} - {match.tournament}, Round {match.round}: 
    </div>
  );
}

export default MatchInfoShort;