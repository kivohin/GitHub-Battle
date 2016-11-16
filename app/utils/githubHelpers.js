var axios = require('axios');

// Use the below three lines of code if I get rate limited by GitHub
var id = "YOUR_CLIENT_ID";
var sec = "YOUR_SECRET_ID";
var param = "?client_id=" + id + "&client_secret=" + sec;

function getUserInfo(username) {
  return axios.get('https://api.github.com/users/' + username + param)
}

function getRepos(username) {
  return axios.get('https://api.github.com/users/' + username + '/repos' + param + '&per_page-100')
}

function getTotalStars(repos) {
  return repos.data.reduce(function(prev, current) {
    return prev + current.stargazers_count
  }, 0)
}

function getPlayersData(player) {
  return getRepos(player.login)
    .then(getTotalStars)
    .then(function(totalStars) {
      return{
        followers: player.followers,
        totalStars: totalStars
      }
    })
}

function calculateScores(players) {
  return[
    players[0].followers * 3 + players[0].totalStars,
    players[1].followers * 3 + players[1].totalStars
  ]
}

var helpers = {
  getPlayersInfo: function(players) {
    // Fetch some data from GitHub
    return axios.all(players.map(function(username) {
      return getUserInfo(username)
    })).then(function(info) {
      return info.map(function(user) {
        return user.data
      })
    }).catch(function(err) {
      console.warn('Error in getPlayersInfo: ', err)
    })
  },

  battle: function(players) {
    var PlayerOneData = getPlayersData(players[0]);
    var PlayerTwoData = getPlayersData(players[1]);

    return axios.all([PlayerOneData, PlayerTwoData])
      .then(calculateScores)
      .catch(function(err) {console.warn('Error in getPlayersData: ', err)})
  }
};

module.exports = helpers;