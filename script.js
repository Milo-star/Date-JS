// Exercise 1
let aryIannaTimeZones = [
    'Europe/Brussels',
    'America/Anchorage',
    'Atlantic/Reykjavik',
    // 'Russia/Saint-Petersburg'
]

let date = new Date;
aryIannaTimeZones.forEach((timeZone) =>
{
  let strTime = date.toLocaleString("en-US", {timeZone: `${timeZone}`});
  console.log(timeZone, strTime);
});