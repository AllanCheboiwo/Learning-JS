function getWeekDay(date) {
  let day = ["SU", "MON", "TU", "WE", "TH", "FR", "ST"];

  return day[date.getDay()];
}

function getLocalDay(date) {
  if (date.getDay() == 0) return 7;
  return date.getDay();
}

function getDateAgo(date, days) {
  return new Date(date - days * 24 * 3600 * 1000).getDate();
}

function getLastDayOfMonth(year, month) {
  let date = new Date(year, month + 1, 0);

  return date.getDate();
}

function getSecondsToday() {
  let date1 = new Date();
  let year = date1.getFullYear();
  let month = date1.getMonth();
  let day = date1.getDate();

  console.log(date1);
  let date2 = new Date(year, month, day);
  console.log(date2);
  return Math.round((date1.getTime() - date2.getTime()) / 1000);
}

function getSecondsTomorrow() {
  let now = new Date();
  let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);

  let diff = tomorrow - now;

  return Math.round(diff / 1000);
}

// function formatDate(date) {
//   if()
// }

console.log(getSecondsTomorrow());
// let date1 = new Date("2012-02-20T03:12");
// console.log(date1);

// let date = new Date(2012, 0, 3);

// console.log(getWeekDay(date));

// let date = new Date(2012, 0, 3); // 3 Jan 2012
// console.log(getLocalDay(date)); // tuesday, should show 2
//
// let date = new Date(2015, 0, 2);

// console.log(getDateAgo(date, 1));
// console.log(getDateAgo(date, 2));
// console.log(getDateAgo(date, 365));
