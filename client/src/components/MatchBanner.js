import React from 'react';

function MatchBanner({match}) {
  return (
    <div className='MatchBanner'>
        <div className='BannerHome' style={{'backgroundColor': match.homeTeam.teamColors.primary, 'color': match.homeTeam.teamColors.text}}>
          {match.homeTeam.shortName}
        </div>
        <div className='BannerAway' style={{'backgroundColor': match.awayTeam.teamColors.primary, 'color': match.awayTeam.teamColors.text}}>
          {match.awayTeam.shortName}
        </div>
        <div className='BannerVS'>
          <div>
            VS
          </div>
        </div>
      </div>
  );
}

export default MatchBanner;