import React from 'react';

function MatchSelect({matches , handleSelect}) {
  return (
    <div className='match-select'>
      <select id='match-select' onChange={(event)=>handleSelect(event)}>
        <option value=''>-- Overview - select match --</option>
        {matches.length > 0 && matches.map(data => {
          return <option key={data.matchid} value={data.matchid}>{data.shortDate}: {data.homeTeamShort} vs. {data.awayTeamShort}</option>
        })}
      </select>
    </div>
  );
}

export default MatchSelect;