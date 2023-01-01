const url = 'http://localhost:3001';

export const fetchMatches = async () => {
  const res = await fetch(url + '/matches').catch((error) => console.log(error));
  return res.json();
};

export const fetchTicketReservations = async () => {
  const res = await fetch(url + '/tickets').catch((error) => console.log(error));
  return res.json();
};

export const postTicketReservation = async (newTicketReservation) => {
  const res = await fetch(url + '/tickets', {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newTicketReservation)
  }).catch((error) => console.log(error));
  return res.json();
};
