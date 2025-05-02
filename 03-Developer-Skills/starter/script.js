// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const x = 23;
// if (x === 23) console.log('23');
// console.log();
// console.log();
// console.log();

///////////////////////////////////////
// Coding Challenge #1

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

//Understanding the problem:
// 1. Array of maximum temperatures
// 2. Array numbers to "string"

// Breaking up into sub-problems:
// - Function took an array and print to string

// const printForecast = function (arr) {
//   let str = '';
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     count = i + 1;
//     str += `... ${arr[i]}ºC in ${count} days `;
//   }
//   console.log(str + '...');
// };

// printForecast([17, 21, 23]);
// printForecast([12, 5, -5, 0, 4]);

// 1) Understanding the problem
// - Array transformed to string, separated by ...
// - What is the X days? Answer: index + 1

// 2) Breaking up into sub-problems
// - Transform array into string
// - Transform each element to string with ºC
// - Strings needs to contain day (index + 1)
// - Add ... between elements and start and end of string
// - Log string to console

// const data1 = [17, 21, 23];
// const data2 = [12, 5, -5, 0, 4];

// // console.log(`... ${data1[0]}ºC ... ${data1[1]}ºC ... ${data1[2]}ºC ...`);

// const printForecast = function (arr) {
//   let str = '';
//   for (let i = 0; i < arr.length; i++) {
//     str += `${arr[i]}ºC in ${i + 1} days ... `;
//   }
//   console.log('...' + str);
// };
// printForecast(data1);
// printForecast(data2);

// function printForecast(arr) {
//   // 1. Initialize an empty string to store the forecast message
//   let forecastStr = '';

//   // 2. Loop through the array to construct the message
//   for (let i = 0; i < arr.length; i++) {
//     forecastStr += `... ${arr[i]}ºC in ${i + 1} days `;
//   }

//   // 3. Log the final forecast message
//   console.log(forecastStr + '...');
// }

// // Test cases
// printForecast([17, 21, 23]); // Expected output: "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."
// printForecast([12, 5, -5, 0, 4]); // Expected output: "... 12ºC in 1 days ... 5ºC in 2 days ... -5ºC in 3 days ... 0ºC in 4 days ... 4ºC in 5 days ..."

// Coding Challenge #2 With AI

/*
Let's say you're building a time tracking application for freelancers. At some point in building this app, you need a function that receives daily work hours for a certain week, and returns:
1. Total hours worked
2. Average daily hours
3. The day with the most hours worked
4. Number of days worked
5. Whether the week was full-time (worked 35 hours or more)

TEST DATA: [7.5, 8, 6.5, 0, 8.5, 4, 0]
*/

// let hours = [7.5, 8, 6.5, 0, 8.5, 4, 0];

// let trackingApp = function (hour) {
//   let totalHours = 0;
//   let averageDaily = 0;
//   let hardWorkingDay = 0;
//   let maxHoursDay = 0;
//   let workingDays = 0;
//   let countWorkDays = [];
//   let fulltime;

//   for (let i = 0; i < hour.length; i++) {
//     totalHours += hour[i];

//     averageDaily = totalHours / hour.length;

//     if (hour[i] > maxHoursDay) {
//       maxHoursDay = hour[i];
//       hardWorkingDay = hour.indexOf(maxHoursDay) + 1;
//     }

//     if (hour[i] > 0) {
//       countWorkDays[i] = hour[i];
//       workingDays = countWorkDays.length - 1;
//     }

//     fulltime = totalHours >= 35;
//   }
//   console.log(totalHours);
//   console.log(averageDaily);
//   console.log(hardWorkingDay);
//   console.log(workingDays);
//   console.log(fulltime);
// };

// trackingApp(hours);

// Written by ChatGPT
function analyzeWorkWeek(dailyHours) {
  const daysOfWeek = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];

  // Validate that the input array has exactly 7 elements
  if (!Array.isArray(dailyHours) || dailyHours.length !== 7) {
    throw new Error('Input must be an array of exactly 7 daily work hours.');
  }

  // Calculate total hours worked
  const totalHours = dailyHours.reduce((sum, hours) => sum + hours, 0);

  // Calculate average daily hours, rounded to one decimal place
  const averageHours = Math.round((totalHours / dailyHours.length) * 10) / 10;

  // Find the day with the most hours worked
  const maxHours = Math.max(...dailyHours);
  const maxDayIndex = dailyHours.indexOf(maxHours);
  const maxDay = daysOfWeek[maxDayIndex]; // Convert index to day name

  // Count the number of days worked
  const daysWorked = dailyHours.filter(hours => hours > 0).length;

  // Check if the week was full-time (35 hours or more)
  const isFullTime = totalHours >= 35;

  // Return the result object
  return {
    totalHours,
    averageHours,
    maxDay, // The name of the day with the most hours
    daysWorked,
    isFullTime,
  };
}

const weeklyHours = [7.5, 8, 6.5, 0, 8.5, 4, 0];
const analysis = analyzeWorkWeek(weeklyHours);
console.log(analysis);

const weeklyHours2 = [7.5, 8, 6.5, 0, 8.5];
const analysis2 = analyzeWorkWeek(weeklyHours2);
console.log(analysis2);
