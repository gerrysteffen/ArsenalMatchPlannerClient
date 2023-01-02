export const dateTransform = (timestamp) => {
  const date = new Date(timestamp).toLocaleString('en-GB', {
    timeZone: 'Europe/London',
  });
  return {
    timestamp: timestamp,
    date: date.slice(0, 17),
    shortDate: date.slice(0, 10),
    time: date.slice(11, 17),
  };
};

const availableTickets = 4;

export const calculateAvailability = (matches, reservedTickets) => {
  for (let match of matches) {
    // define availability of tickets: available for all PL home games and first 7 FA Cup games
    if (
      (match.tournament === 'Premier League' && match.homeTeam.name === 'Arsenal') ||
      (match.tournament === 'FA Cup' && match.round <= 8)
    ) {
      match.availableTickets = availableTickets;
    } else {
      match.availableTickets = 0;
    }
    // define claimed tickets by filtering reservation and adding up
    const applicableTickets = reservedTickets.filter(
      (Reservation) => Reservation.matchid === match.matchid
    );
    let claimedTickets = 0;
    applicableTickets.forEach(
      (Reservation) => (claimedTickets += Reservation.numberOfTickets)
    );
    match.claimedTickets = claimedTickets;
  }
  return matches;
};
