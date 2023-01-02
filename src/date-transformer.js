export const dateTransform = (timestamp) => {
  const date = new Date(timestamp).toLocaleString('en-GB', {
    timeZone: 'Europe/London',
  });
  return {
    timestamp: timestamp,
    date: date.slice(0, 17),
    shortDate: date.slice(0, 10),
    time: date.slice(11,17)
  }
}