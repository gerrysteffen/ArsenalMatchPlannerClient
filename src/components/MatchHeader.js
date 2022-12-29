import React from 'react';

function MatchHeader({data}) {
  return (
    <div className='MatchHeaderContainer'>
      <div className='MHInfo'>
        {data.date} - {data.tournament}, Round {data.round}: 
      </div>
      <div className='MHBanner'>
        <div className='MHHome' style={{'backgroundColor': data.homeTeam.teamColors.primary, 'color': data.homeTeam.teamColors.text}}>
          {data.homeTeam.shortName}
        </div>
        <div className='MHAway' style={{'backgroundColor': data.awayTeam.teamColors.primary, 'color': data.awayTeam.teamColors.text}}>
          {data.awayTeam.shortName}
        </div>
        <div className='MHVS'>
          <div>
            VS
          </div>
        </div>
      </div>
    </div>
  );
}

// 

export default MatchHeader;