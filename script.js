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

// Exercise 2
let date_1 = new Date('08/13/2003');
let date_2 = new Date();
const days = (date_1, date_2) =>{
    let difference = date_1.getTime() - date_2.getTime();
    let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
    return TotalDays;
}
console.log("Il y a " + days(date_1, date_2) +" jours entre mon anniversaire et maintenant.");