import React from 'react';
import MatchBanner from './MatchBanner.js';
import MatchInfoShort from './MatchInfoShort.js';

function NextMatches({ matches, handleSelect }) {
  return (
    <div className='next-matches'>
      <CSSTransition
        classNames='slide'
        timeout={{ enter: 500, exit: 500 }}
      >
        {matches.map((match) => {
          return (
            <div key={match.matchid} className='next-match'>
              <MatchInfoShort key={match.matchid + '1'} match={match} />
              <MatchBanner
                key={match.matchid + '2'}
                match={match}
                handleSelect={handleSelect}
              />
            </div>
          );
        })}
      </CSSTransition>
    </div>
  );
}

export default NextMatches;
