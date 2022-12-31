import React from 'react';

function MatchBanner({match}) {
  return (
    <div className='MHBanner'>
        <div className='MHHome' style={{'backgroundColor': match.homeTeam.teamColors.primary, 'color': match.homeTeam.teamColors.text}}>
          {match.homeTeam.shortName}
        </div>
        <div className='MHAway' style={{'backgroundColor': match.awayTeam.teamColors.primary, 'color': match.awayTeam.teamColors.text}}>
          {match.awayTeam.shortName}
        </div>
        <div className='MHVS'>
          <div>
            VS
          </div>
        </div>
      </div>
  );
}

export default MatchBanner;