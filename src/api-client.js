const url = 'http://localhost:3001';

export const fetchMatches = async () => {
  const res = await fetch(url + '/matches').catch((error) => console.log(error));
  return res.json();
};
