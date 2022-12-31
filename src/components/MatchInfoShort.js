import React from 'react';

function MatchInfoShort({match}) {
  return (
    <div className='MHInfoShort'>
        {match.date} - {match.tournament}, Round {match.round}: 
    </div>
  );
}

export default MatchInfoShort;