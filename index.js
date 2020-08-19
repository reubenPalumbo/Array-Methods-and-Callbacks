import { fifaData } from "./fifa.js";
// console.log(fifaData);

// console.log("test");
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data */
const task1 = fifaData.filter(function (item) {
  return item["Year"] === 2014;
});

const task1_2 = task1.filter(function (item) {
  return item["Stage"] === "Final";
});

//(a) Home Team name for 2014 world cup final

const task1aEnd = task1_2[0]["Home Team Name"];

// console.log(task1aEnd);
//(b) Away Team name for 2014 world cup final
const task1bEnd = task1_2[0]["Away Team Name"];

// console.log(task1bEnd);
//(c) Home Team goals for 2014 world cup final
const task1cEnd = task1_2[0]["Home Team Goals"];

// console.log(task1cEnd);
//(d) Away Team goals for 2014 world cup final
const task1dEnd = task1_2[0]["Away Team Goals"];

// console.log(task1dEnd);
//(e) Winner of 2014 world cup final
const task1eEnd = task1_2[0]["Win conditions"];

// console.log(task1eEnd);

/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data) {
  const temp = data.filter(function (item) {
    return item["Stage"] === "Final";
  });
  return temp;
}
// console.log(getFinals(fifaData));

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(cb) {
  const years = cb.map(function (item) {
    return item["Year"];
  });
  return years;
}

console.log(getYears(getFinals(fifaData)));

/* Task 4: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */

function getWinners(cb) {
  const home = cb.map(function (item) {
    return item["Home Team Goals"];
  });
  const away = cb.map(function (item) {
    return item["Away Team Goals"];
  });
  const winners = [];
  for (let i = 0; i < cb.length; i++) {
    if (home[i] > away[i]) {
      winners.push(cb[i]["Home Team Name"]);
    } else if (home[i] < away[i]) {
      winners.push(cb[i]["Away Team Name"]);
    } else {
      winners.push(cb[i]["Win conditions"]);
    }
  }

  return winners;
}

console.log(getWinners(getFinals(fifaData)));

/* Task 5: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(cbWin, cbYears) {
  const tempArr = [];
  for (let i = 0; i < cbWin.length; i++) {
    tempArr.push(`In ${cbYears[i]}, ${cbWin[i]} won the world cup!`);
  }
  return tempArr;
}

console.log(
  getWinnersByYear(
    getWinners(getFinals(fifaData)),
    getYears(getFinals(fifaData))
  )
);

/* Task 6: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {
  const temp = data.reduce(function (acc, item) {
    return acc + item["Away Team Goals"] + item["Home Team Goals"];
  }, 0);
  const tempEnd = temp / (data.length + 1);
  // console.log(temp);
  return tempEnd;
}

console.log(getAverageGoals(fifaData));

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {
  /* code here */
}

getCountryWins();

/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {
  /* code here */
}

getGoals();

/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {
  /* code here */
}

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
