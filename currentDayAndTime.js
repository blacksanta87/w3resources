// Write a JavaScript program to display the current day and time in the following format.
// Today is: Tuesday
// Current Time is: 10 PM:30:38


function getCurrentDayAndTime() {
  const days = {
    '0': 'Sunday',
    '1': 'Monday',
    '2': 'Tuesday',
    '3': 'Wednesday',
    '4': 'Thursday',
    '5': 'Friday',
    '6': 'Saturday'
  }

  const hours = {
    '0': '12 AM',
    '1': '1 AM',
    '2': '2 AM',
    '3': '3 AM',
    '4': '4 AM',
    '5': '5 AM',
    '6': '6 AM',
    '7': '7 AM',
    '8': '8 AM',
    '9': '9 AM',
    '10': '10 AM',
    '11': '11 AM',
    '12': '12 PM',
    '13': '1 PM',
    '14': '2 PM',
    '15': '3 PM',
    '16': '4 PM',
    '17': '5 PM',
    '18': '6 PM',
    '19': '7 PM',
    '20': '8 PM',
    '21': '9 PM',
    '22': '10 PM',
    '23': '11 PM'
  }

  let currentTimeAndDate = new Date();
  let currentDay = days[currentTimeAndDate.getDay()];
  let currentHour = hours[currentTimeAndDate.getHours()];
  let currentMinutes = currentTimeAndDate.getMinutes();
  let currentSeconds = currentTimeAndDate.getSeconds();

  return `Today is: ${currentDay}\nCurrent time is: ${currentHour} : ${currentMinutes} : ${currentSeconds}`;
}

console.log(getCurrentDayAndTime());
