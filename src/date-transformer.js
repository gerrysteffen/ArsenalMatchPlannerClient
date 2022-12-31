export const dateTransform = (data) => {
  data.map((match) => {
    const date = new Date(match.timestamp * 1000).toLocaleString('en-GB', {
      timeZone: 'Europe/London',
    });
    match.date = date;
    match.shortDate = match.date.slice(0, 10);
  })
  return data;
}