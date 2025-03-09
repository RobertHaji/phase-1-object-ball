// Part one is building Data Structure with gameOject function with return objects nested in different objects
function gameObject() {
  return {
    home: {
      teamName: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: {
        "Alan Anderson": {
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1,
        },
        "Reggie Evans": {
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slamDunks: 7,
        },
        "Brook Lopez": {
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slamDunks: 15,
        },
        "Mason Plumlee": {
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists22: 6,
          steals: 3,
          blocks: 8,
          slamDunks: 5,
        },
        "Jason Terry": {
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists22: 2,
          steals: 4,
          blocks: 11,
          slamDunks: 1,
        },
      },
    },
    away: {
      teamName: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: {
        "Jeff Adrien": {
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slamDunks: 2,
        },
        "Bismak Biyombo": {
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slamDunks: 10,
        },
        "DeSagna Diop": {
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slamDunks: 5,
        },
        "Ben Gordon": {
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slamDunks: 0,
        },
        "Brendan Haywood": {
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slamDunks: 12,
        },
      },
    },
  };
}

// Below is an example of how to call gameObject

/* function homeTeamName() {
   let object = gameObject();
   return object["home"]["teamName"];
 }
 console.log(homeTeamName());
*/

// 1.Returns points scored by a player
function numPointsScored(playerName) {
  let game = gameObject();
  if (game.home.players[playerName]) {
    return game.home.players[playerName].points;
  } else if (game.away.players[playerName]) {
    return game.away.players[playerName].points;
  } else {
    return "Player does not exist";
  }
}
debugger;
console.log(numPointsScored("Bismak Biyombo"));

// 2. Return ShoeSize by player name
function shoeSize(playerName) {
  let game = gameObject();
  if (game.home.players[playerName]) {
    return game.home.players[playerName].shoe;
  } else if (game.away.players[playerName]) {
    return game.away.players[playerName].shoe;
  } else {
    return "Player does not exist";
  }
}
debugger;
console.log(shoeSize("Mason Plumlee"));

//3. Returns teamColor by teamName in

function teamColors(teamName) {
  let game = gameObject();
  if (game.home.teamName == teamName) {
    return game.home.colors;
  } else if (game.away.teamName == teamName) {
    return game.home.colors;
  } else {
    return "Team Name does not exist";
  }
}
debugger;
console.log(teamColors("Brooklyn Nets"));

// 4. Returns an array of teamNames
function teamNames() {
  let game = gameObject();
  let teamNames = [];
  for (let team in game) {
    teamNames.push(game[team].teamName);
  }
  return teamNames;
}
debugger;
console.log(teamNames());

// 5. Returns an an array of jersey numbers by teamName

function playerNumbers(teamName) {
  let game = gameObject();
  let pNumbers = [];
  if (game.home.teamName == teamName) {
    console.log(teamName);

    for (let player in game.home.players) {
      console.log(player);
      pNumbers.push(game.home.players[player].number);
    }
  } else if (game.away.teamName == teamName) {
    console.log(teamName);

    for (let player in game.away.players) {
      console.log(player);
      pNumbers.push(game.away.players[player].number);
    }
  } else {
    return "Team does not exist";
  }
  return pNumbers;
}
debugger;
console.log(playerNumbers("Brooklyn Nets"));

// 6. Returns player stats by player name

function playerStats(playerName) {
  let game = gameObject();
  if (game.home.players[playerName]) {
    return game.home.players[playerName];
  } else if (game.away.players[playerName]) {
    return game.away.players[playerName];
  } else {
    return "Player Name does not exist";
  }
}
debugger;
console.log(playerStats("Ben Gordonua"));

// 7. Returns rebounds with player who has the largest shoe size

function bigShoeRebounds() {
  const game = gameObject();
  let shoeSize = [];
  let playerName = "";
  let rebounds = 0;
  for (let teamType in game) {
    console.log(teamType);
    for (let player in game[teamType].players) {
      console.log(game[teamType].players[player].shoe);
      shoeSize.push({
        name: player,
        size: game[teamType].players[player].shoe,
      });
    }
  }
  debugger;
  console.log(shoeSize);
  let largestObject = shoeSize[0];
  for (let i in shoeSize) {
    if (shoeSize[i].size > largestObject.size) {
      playerName = shoeSize[i].name;
    }
  }
  debugger;
  console.log(playerName);
  for (let teamType in game) {
    if (game[teamType].players[playerName]) {
      debugger;
      console.log(game[teamType].players[playerName].rebounds);
      rebounds = game[teamType].players[playerName].rebounds;
    }
  }
  return rebounds;
}
debugger;
console.log(bigShoeRebounds());

// Bonus Question, returns most points scored by playername

function mostPointScored() {
  const game = gameObject();
  let allPoints = [];
  let playerName = "";
  let rebounds = 0;
  for (let teamType in game) {
    console.log(teamType);
    for (let player in game[teamType].players) {
      console.log(game[teamType].players[player].shoe);
      allPoints.push({
        name: player,
        points: game[teamType].players[player].points,
      });
    }
  }
  debugger;
  console.log(allPoints);
  let largestObject = allPoints[0];
  for (let i in allPoints) {
    if (allPoints[i].points > largestObject.points) {
      playerName = allPoints[i].name;
    }
  }
  debugger;
  console.log(playerName);
  return playerName;
}
debugger;
console.log(mostPointScored());

// Returns winning team by name by combining total points from players (home and away) and comparing home and away team points

function winningTeam() {
  const game = gameObject();
  let totalHomePoints = 0;
  let totalAwayPoints = 0;
  if (game.home) {
    for (let player in game.home.players) {
      totalHomePoints += game.home.players[player].points;
    }
  }
  if (game.away) {
    for (let player in game.away.players) {
      totalAwayPoints += game.away.players[player].points;
    }
  }
  if (totalHomePoints > totalAwayPoints) {
    return "Home Team";
  } else {
    return "Away Team";
  }
}
debugger;
console.log(winningTeam());

// Returns player with the longest Name by arrays of names

function playerWithLongestName() {
  const game = gameObject();
  let names = [];
  let playerName = "";
  for (let team in game) {
    for (let player in game[team].players) {
      names.push(player);
    }
  }
  debugger;
  console.log(names);
  let longestName = names[0].length;
  for (let i in names) {
    if (names[i].length > longestName) {
      playerName = names[i];
    }
  }
  debugger;
  console.log(playerName);
  return playerName;
}
debugger;
console.log(playerWithLongestName());

// Super Bonus-> Returns player with the LongestSteal and finding out if player with the longest name had the most steals

function doesLongNameStealATon() {
  const game = gameObject();
  let allSteals = [];
  let longestNameSteals = 0;
  for (let team in game) {
    if (game[team].players[playerWithLongestName()]) {
      longestNameSteals = game[team].players[playerWithLongestName()].steals;
      debugger;
      console.log(longestNameSteals);
    }

    for (let player in game[team].players) {
      allSteals.push(game[team].players[player].steals);
    }
  }
  // Use spread operator (...)
  // Math.max -> find the greatest number
  const largestSteal = Math.max(...allSteals);
  console.log(
    "largest steal= ",
    largestSteal,
    "longest name steals=",
    longestNameSteals
  );
  return longestNameSteals >= largestSteal;
}
debugger;
console.log(doesLongNameStealATon());
cd