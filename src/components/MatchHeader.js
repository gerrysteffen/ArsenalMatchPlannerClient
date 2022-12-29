import React from 'react';

function MatchHeader({data}) {
  return (
    <div className='MatchHeaderContainer'>
      <div className='MHInfo'>
        {data.shortDate} - {data.tournament}, Round {data.round}: 
      </div>
      <div className='MHBanner'>
        <div className='MHHome' style={{'backgroundColor': data.homeTeam.teamColors.primary, 'color': data.homeTeam.teamColors.text}}>
          {data.homeTeam.name}
        </div>
        <div className='MHAway' style={{'backgroundColor': data.awayTeam.teamColors.primary, 'color': data.awayTeam.teamColors.text}}>
          {data.awayTeam.name}
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