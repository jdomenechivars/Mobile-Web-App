// BUTTONS BEHAIVOR //

$(document).ready(function () {

  $(".sett").click(function () {
    $(".settingsPanelBox").animate({
      width: "toggle"
    });
    $(".userPicDiv").fadeToggle(2000);
    $(".userName").fadeToggle(2000);
    $(".userMail").fadeToggle(2000);
  });

  $(".shadow").click(function () {
    $(".settingsPanelBox").animate({
      width: "toggle"
    });
    $(".userPicDiv").fadeToggle("fast");
    $(".userName").fadeToggle("fast");
    $(".userMail").fadeToggle("fast");
  });

  $(".bigButtons").click(function () {

    $(".aback").show();
    $(".menu1").hide();
    $(".menu2").show();

  });

  $(".littleMenuButtons").click(function () {

    $(".aback").show();

  });

  $(".news").click(function () {

    $("#title").empty();
    $("#title").append("NEWS & EVENTS");

    $("#mainBackground").hide();
    $("#news").show();
    $("#schedule").hide();
    $("#scores").hide();
    $("#teams").hide();
    $("#chat").hide();
    $('#contact').hide();

  });

  $(".schedule").click(function () {

    $("#title").empty();
    $("#title").append("SCHEDULE");

    $("#mainBackground").hide();
    $("#news").hide();
    $("#schedule").show();
    $("#scores").hide();
    $("#teams").hide();
    $("#chat").hide();
    $('#contact').hide();


  });

  $(".scores").click(function () {


    $("#title").empty();
    $("#title").append("SCORES");


    $("#mainBackground").hide();
    $("#news").hide();
    $("#schedule").hide();
    $("#scores").show();
    $("#teams").hide();
    $("#chat").hide();
    $('#contact').hide();

  });

  $(".teams").click(function () {

    $("#title").empty();
    $("#title").append("TEAMS");

    $("#mainBackground").hide();
    $("#news").hide();
    $("#schedule").hide();
    $("#scores").hide();
    $("#teams").show();
    $("#chat").hide();
    $('#contact').hide();

  });

  $(".chat").click(function () {

    $("#title").empty();
    $("#title").append("CHAT");

    $("#mainBackground").hide();
    $("#news").hide();
    $("#schedule").hide();
    $("#scores").hide();
    $("#teams").hide();
    $("#chat").show();
    $('#contact').hide();

  });

  $(".contact").click(function () {

    $("#title").empty();
    $("#title").append("CONTACT");

    $("#mainBackground").hide();
    $("#news").hide();
    $("#schedule").hide();
    $("#scores").hide();
    $("#teams").hide();
    $("#chat").hide();
    $('#contact').show();

  });

  $(".new").click(function () {

    $(this).children(".newsContent").toggle();
    $(this).children(".plusIcon").toggle();
    $(this).children(".minusIcon").toggle();

  });

  $(".event").click(function () {

    $(this).children(".eventContent").toggle();
    $(this).children(".plusIcon").toggle();
    $(this).children(".minusIcon").toggle();

  });

  addFirebase();

});

// NEWS PAGE CREATOR //

$.getJSON("json/news.json", function (data) {

  createNews(data)

});

$.getJSON("json/events.json", function (data) {

  createEvents(data);

});

function createNews(data) {

  var home = $("#home");

  var news = data.news;

  news.sort(compare);

  for (g = 0; g < news.length; g++) {

    var eachNew = news[g];

    var article = document.createElement("article");
    article.setAttribute("class", "new");

    var title = document.createElement("h2");
    title.setAttribute("class", "newsTitle");
    title.innerHTML = eachNew.title;
    article.appendChild(title);

    var newsTime = document.createElement("time");
    newsTime.setAttribute("class", "newsDate");

    createNewsDate(eachNew, newsTime);
    article.appendChild(newsTime);

    var plus = document.createElement("img");
    plus.setAttribute("class", "plusIcon");
    plus.setAttribute("src", "styles/icons/add-circular-button.png");
    plus.setAttribute("alt", "plus icon");
    article.appendChild(plus);

    var minus = document.createElement("img");
    minus.setAttribute("class", "minusIcon");
    minus.setAttribute("src", "styles/icons/minus-circular-button.png");
    minus.setAttribute("alt", "minus icon");
    article.appendChild(minus);

    var newsContent = document.createElement("p");
    newsContent.setAttribute("class", "newsContent");
    newsContent.innerHTML = eachNew.content;
    article.appendChild(newsContent);

    home.append(article);

  }

}

function createEvents(data) {

  var home = $("#profile");

  var events = data.events;

  events.sort(compare);

  for (h = 0; h < events.length; h++) {

    var eachNew = events[h];

    var article = document.createElement("article");
    article.setAttribute("class", "event");

    var newsTime = document.createElement("time");
    newsTime.setAttribute("class", "eventDate");

    createNewsDate(eachNew, newsTime);
    article.appendChild(newsTime);

    var title = document.createElement("h2");
    title.setAttribute("class", "eventTitle");
    title.innerHTML = eachNew.title;
    article.appendChild(title);

    var plus = document.createElement("img");
    plus.setAttribute("class", "plusIcon");
    plus.setAttribute("src", "styles/icons/add-circular-button.png");
    plus.setAttribute("alt", "plus icon");
    article.appendChild(plus);

    var minus = document.createElement("img");
    minus.setAttribute("class", "minusIcon");
    minus.setAttribute("src", "styles/icons/minus-circular-button.png");
    minus.setAttribute("alt", "minus icon");
    article.appendChild(minus);

    var eventContent = document.createElement("p");
    eventContent.setAttribute("class", "eventContent");
    eventContent.innerHTML = eachNew.content;
    article.appendChild(eventContent);

    home.append(article);

  }
}

function createNewsDate(eachNew, newsTime) {

  var day = eachNew.date.day;

  var month = eachNew.date.month;

  switch (month) {

    case "01":

      month = "January"
      break;

    case "02":

      month = "February"
      break;

    case "03":

      month = "March"
      break;

    case "04":

      month = "April"
      break;

    case "05":

      month = "May"
      break;

    case "06":

      month = "June"
      break;

    case "07":

      month = "July"
      break;

    case "08":

      month = "August"
      break;

    case "09":

      month = "September"
      break;
    case "10":

      month = "October"
      break;

    case "11":

      month = "November"
      break;

    case "12":

      month = "December"
      break;

  }

  var dateNews = month + " " + day;

  newsTime.innerHTML = dateNews;

}

// SCHEDULE PAGE CREATOR //

$.getJSON("json/stadiums.json", function (data2) {

  var stad = data2;


  $.getJSON("json/schedule.json", function (data) {

    createSchedule(data, stad);

  });

});

function createSchedule(data, stad) {

  var matches = data.matches;

  var schedule = $("#schedule");

  $("#schedule").empty();

  for (i = 0; i < matches.length; i++) {

    var game = matches[i];

    var creaGame = document.createElement("div");
    creaGame.setAttribute("class", "game");

    var creaShowedInfo = document.createElement("div");
    creaShowedInfo.setAttribute("class", "showedInfo");

    creaGame.appendChild(creaShowedInfo);


    createDateInfo(game, creaShowedInfo);
    createTeamsInfo(game, creaShowedInfo);
    createTimeInfo(game, creaGame);
    createFieldInfo(game, creaGame, stad);

    schedule.append(creaGame);

  }

  $(".timeDiv").hide();
  $(".stadiumDiv").hide();
  $(".adressDiv").hide();

  $(".showedInfo").click(function () {

    $(this).next().toggle();
    $(this).siblings(".stadiumDiv").toggle();
    $(this).siblings(".adressDiv").hide();



  });

  $(".stadiumDiv").click(function () {

    $(this).siblings(".adressDiv").toggle();
    $(".gameArrow").toggleClass('gameArrowReset');

  });

}

function createTeamsInfo(game, creaShowedInfo) {

  var team1 = game.teams.team1;
  var team2 = game.teams.team2;

  var teams = document.createElement("div");
  teams.setAttribute("class", "gameTeams");

  var firstTeam = document.createElement("p");
  firstTeam.innerHTML = team1;
  //  firstTeam.setAttribute("class", "team1");

  switch (team1) {

    case "U1":

      firstTeam.setAttribute("class", "U1");
      break;

    case "U2":

      firstTeam.setAttribute("class", "U2");
      break;

    case "U3":

      firstTeam.setAttribute("class", "U3");
      break;

    case "U4":

      firstTeam.setAttribute("class", "U4");
      break;

    case "U5":

      firstTeam.setAttribute("class", "U5");
      break;

    case "U6":

      firstTeam.setAttribute("class", "U6");
      break;
  }


  var secondTeam = document.createElement("p");
  secondTeam.innerHTML = team2;
  //  secondTeam.setAttribute("class", "team2");
  switch (team2) {

    case "U1":

      secondTeam.setAttribute("class", "U1");
      break;

    case "U2":

      secondTeam.setAttribute("class", "U2");
      break;

    case "U3":

      secondTeam.setAttribute("class", "U3");
      break;

    case "U4":

      secondTeam.setAttribute("class", "U4");
      break;

    case "U5":

      secondTeam.setAttribute("class", "U5");
      break;

    case "U6":

      secondTeam.setAttribute("class", "U6");
      break;
  }

  var VS = document.createElement("p");
  VS.setAttribute("class", "vs");
  VS.innerHTML = " VS. ";

  teams.appendChild(firstTeam);
  teams.appendChild(VS);
  teams.appendChild(secondTeam);
  creaShowedInfo.appendChild(teams);

}

function createDateInfo(game, creaShowedInfo) {

  var day = game.date.day;

  var month = game.date.month;

  var dateTime = month + "-" + day;

  switch (month) {

    case "01":

      month = "January"
      break;

    case "02":

      month = "February"
      break;

    case "03":

      month = "March"
      break;

    case "04":

      month = "April"
      break;

    case "05":

      month = "May"
      break;

    case "06":

      month = "June"
      break;

    case "07":

      month = "July"
      break;

    case "08":

      month = "August"
      break;

    case "09":

      month = "September"
      break;
    case "10":

      month = "October"
      break;

    case "11":

      month = "November"
      break;

    case "12":

      month = "December"
      break;

  }

  var date = document.createElement("time");
  date.setAttribute("datetime", dateTime);
  date.setAttribute("class", "gameDate");

  var dayP = document.createElement("p");
  dayP.setAttribute("class", "gameDay");
  dayP.innerHTML = day;

  var monthP = document.createElement("p");
  monthP.setAttribute("class", "gameMonth");
  monthP.innerHTML = month + ", ";

  date.appendChild(monthP);
  date.appendChild(dayP);
  creaShowedInfo.appendChild(date);

}

function createTimeInfo(game, creaGame) {

  var hour = game.date.time.hour;
  var minuts = game.date.time.minuts;
  var period = game.date.time.period;

  var timeDiv = document.createElement("div");
  timeDiv.setAttribute("class", "timeDiv");

  var time = hour + ":" + minuts;
  var timePeriod = time + " " + period;

  var timeIcon = document.createElement("img");
  timeIcon.setAttribute("class", "timeIcon");
  timeIcon.setAttribute("src", "styles/icons/time.png");
  timeIcon.setAttribute("alt", "timeIcon");
  timeDiv.appendChild(timeIcon);


  var timeP = document.createElement("p");
  timeP.setAttribute("class", "gameHour")

  var gameTime = document.createElement("time");
  gameTime.setAttribute("datetime", time);
  gameTime.setAttribute("class", "gameTime");
  timeP.innerHTML = timePeriod;
  gameTime.appendChild(timeP);
  timeDiv.appendChild(gameTime);
  creaGame.appendChild(timeDiv);

}

function createFieldInfo(game, creaGame, stad) {

  var field = game.location;

  //  var fieldDiv = document.createElement("div");
  //  fieldDiv.setAttribute("class", "fieldDiv");

  var stadiums = stad.stadiums;

  for (j = 0; j < stadiums.length; j++) {

    var eachStadium = stadiums[j];

    if (field == stadiums[j].short) {

      var thatField = stadiums[j];

      var stadiumDiv = document.createElement("div");
      stadiumDiv.setAttribute("class", "stadiumDiv");

      var stadiumIcon = document.createElement("img");
      stadiumIcon.setAttribute("class", "stadiumIcon");
      stadiumIcon.setAttribute("src", "styles/icons/stadium.png");
      stadiumIcon.setAttribute("alt", "stadiumIcon");
      stadiumDiv.appendChild(stadiumIcon);


      var fieldP = document.createElement("p");
      fieldP.setAttribute("class", "gameStadium");
      fieldP.innerHTML = thatField.name;
      stadiumDiv.appendChild(fieldP);

      var arrow = document.createElement("p");
      arrow.setAttribute("class", "gameArrow");
      arrow.innerHTML = "‹";
      stadiumDiv.appendChild(arrow);

      creaGame.appendChild(stadiumDiv);

      moreFieldInfo(thatField, creaGame);

    }

  }

}

function moreFieldInfo(thatField, creaGame) {

  var stadiumInfo = document.createElement("div");
  stadiumInfo.setAttribute("class", "stadiumInfo");

  var street = thatField.adress.street;
  var locality = thatField.adress.locality;
  var region = thatField.adress.region;
  var postalcode = thatField.adress.postalcode;
  var ubication = thatField.ubication;

  var firstLineAdress = street + ","
  var secondLineAdress = locality + ", " + region + " " + postalcode;

  var adressDiv = document.createElement("div");
  adressDiv.setAttribute("class", "adressDiv");

  var directionDiv = document.createElement("div");
  directionDiv.setAttribute("class", "directionDiv");

  var placeHolderDiv = document.createElement("div");
  placeHolderDiv.setAttribute("class", "placeHolderDiv");

  var directionA = document.createElement("a");
  directionA.setAttribute("class", "directionA");
  directionA.setAttribute("href", ubication);

  var stadiumStreet = document.createElement("p");
  stadiumStreet.setAttribute("class", "stadiumStreet");
  stadiumStreet.innerHTML = firstLineAdress;

  var stadiumLocality = document.createElement("p");
  stadiumLocality.setAttribute("class", "stadiumLocality");
  stadiumLocality.innerHTML = secondLineAdress;

  directionA.appendChild(stadiumStreet);
  directionA.appendChild(stadiumLocality);

  directionDiv.appendChild(directionA);

  var placeHolderA = document.createElement("a");
  placeHolderA.setAttribute("class", "placeHolderA");
  placeHolderA.setAttribute("href", ubication);


  var placeHolderIcon = document.createElement("img");
  placeHolderIcon.setAttribute("class", "placeIcon");
  placeHolderIcon.setAttribute("src", "styles/icons/placeholderfilled.png");
  placeHolderIcon.setAttribute("alt", "placeHolderIcon");
  placeHolderA.appendChild(placeHolderIcon);

  placeHolderDiv.appendChild(placeHolderA);
  adressDiv.appendChild(placeHolderDiv);
  adressDiv.appendChild(directionDiv);
  creaGame.appendChild(adressDiv);

}

// SCORES PAGE CREATOR //

$.getJSON("json/schedule.json", function (data) {

  createScores(data);

});

function createScores(data) {

  var scores = document.getElementById("scores");

  $("#scores").empty();

  var gamesPlayed = document.createElement("div");
  gamesPlayed.setAttribute("class", "gamesPlayed");
  scores.appendChild(gamesPlayed);

  var gamesUpcoming = document.createElement("div");
  gamesUpcoming.setAttribute("class", "gamesUpcoming");
  scores.appendChild(gamesUpcoming);

  var matches = data.matches;

  matches.sort(compare);

  var playedArray = [];

  var upcomingArray = [];

  var month = obtainMonth();

  var day = obtainDayNumber();

  for (z = 0; z < matches.length; z++) {

    var game = matches[z];

    if (parseFloat(game.date.month) < month) {

      playedArray.push(game);

    } else if (parseFloat(game.date.month) == month && parseFloat(game.date.day) < day) {

      playedArray.push(game);

    } else {

      upcomingArray.push(game);

    }

  }

  createPlayedMatches(playedArray, gamesPlayed);
  createUpcomingMatches(upcomingArray, gamesUpcoming);

}

function createPlayedMatches(playedArray, gamesPlayed) {

  var playedTitle = document.createElement("div");
  playedTitle.setAttribute("class", "playedTitle");
  gamesPlayed.appendChild(playedTitle);

  var playedTitleP = document.createElement("p");
  playedTitleP.setAttribute("class", "played");
  playedTitleP.innerHTML = "Played Games Scores:"
  playedTitle.appendChild(playedTitleP);


  for (p = 0; p < playedArray.length; p++) {

    var thisMatch = playedArray[p];

    var match = document.createElement("div");
    match.setAttribute("class", "matchPlayed");

    createScoreDate(thisMatch, match);

    var teamA = document.createElement("div");
    teamA.setAttribute("class", "teamAPlayedDiv");

    var teamAP = document.createElement("p");
    teamAP.setAttribute("class", "teamAPlayed");

    teamAP.innerHTML = thisMatch.teams.team1;
    teamA.appendChild(teamAP);
    match.appendChild(teamA);

    var playedScore = document.createElement("div");
    playedScore.setAttribute("class", "playedScoreDiv");

    var score1 = document.createElement("p");
    score1.setAttribute("class", "score1");
    score1.innerHTML = thisMatch.scores.team1;
    playedScore.appendChild(score1);

    var dash = document.createElement("p");
    dash.setAttribute("class", "dash");
    dash.innerHTML = "-";
    playedScore.appendChild(dash);

    var score2 = document.createElement("p");
    score2.setAttribute("class", "score2");
    score2.innerHTML = thisMatch.scores.team2;
    playedScore.appendChild(score2);

    match.appendChild(playedScore);

    var teamB = document.createElement("div");
    teamB.setAttribute("class", "teamBPlayedDiv");

    var teamBP = document.createElement("p");
    teamBP.setAttribute("class", "teamBPlayed");

    teamBP.innerHTML = thisMatch.teams.team2;
    teamB.appendChild(teamBP);
    match.appendChild(teamB);

    gamesPlayed.appendChild(match);
  }


}

function createUpcomingMatches(upcomingArray, gamesUpcoming) {

  var upcomingTitle = document.createElement("div");
  upcomingTitle.setAttribute("class", "upcomingTitle");
  gamesUpcoming.appendChild(upcomingTitle);

  var upcomingTitleP = document.createElement("p");
  upcomingTitleP.setAttribute("class", "upcoming");
  upcomingTitleP.innerHTML = "Upcoming Games:"
  upcomingTitle.appendChild(upcomingTitleP);

  for (t = 0; t < upcomingArray.length; t++) {

    var thisMatch = upcomingArray[t];

    var match = document.createElement("div");
    match.setAttribute("class", "matchUpcoming");

    createScoreDate(thisMatch, match);

    var teamA = document.createElement("div");
    teamA.setAttribute("class", "teamAUpcomingDiv");

    var teamAP = document.createElement("p");
    teamAP.setAttribute("class", "teamAUpcoming");

    teamAP.innerHTML = thisMatch.teams.team1;
    teamA.appendChild(teamAP);
    match.appendChild(teamA);

    var upcomingScore = document.createElement("div");
    upcomingScore.setAttribute("class", "upcomingScoreDiv");

    var score1 = document.createElement("p");
    score1.setAttribute("class", "score1");
    score1.innerHTML = thisMatch.scores.team1;
    upcomingScore.appendChild(score1);

    var dash = document.createElement("p");
    dash.setAttribute("class", "dash");
    dash.innerHTML = "/";
    upcomingScore.appendChild(dash);

    var score2 = document.createElement("p");
    score2.setAttribute("class", "score2");
    score2.innerHTML = thisMatch.scores.team2;
    upcomingScore.appendChild(score2);

    match.appendChild(upcomingScore);

    var teamB = document.createElement("div");
    teamB.setAttribute("class", "teamBUpcomingDiv");

    var teamBP = document.createElement("p");
    teamBP.setAttribute("class", "teamBUpcoming");

    teamBP.innerHTML = thisMatch.teams.team2;
    teamB.appendChild(teamBP);
    match.appendChild(teamB);

    gamesUpcoming.appendChild(match);


  }


}

function createScoreDate(thisMatch, match) {

  var day = thisMatch.date.day;

  var month = thisMatch.date.month;

  var dateTime = month + "-" + day;

  var date = document.createElement("time");
  date.setAttribute("datetime", dateTime);
  date.setAttribute("class", "scoreDate");

  var monthP = document.createElement("p");
  monthP.setAttribute("class", "scoreMonth");
  monthP.innerHTML = month;

  var blackDash = document.createElement("p");
  blackDash.setAttribute("class", "blackDash");
  blackDash.innerHTML = "-";

  var dayP = document.createElement("p");
  dayP.setAttribute("class", "scoreDay");
  dayP.innerHTML = day;

  date.appendChild(monthP);
  date.appendChild(blackDash);
  date.appendChild(dayP);
  match.appendChild(date);

}

function compare(a, b) {

  if (parseFloat(a.date.month) < parseFloat(b.date.month))
    return -1;
  if (parseFloat(a.date.month) > parseFloat(b.date.month))
    return 1;
  return 0;

}

function obtainMonth() {

  var d = new Date();

  var month = d.getMonth();

  return (month + 1);

}

function obtainDayNumber() {

  var d = new Date();
  var dayNumber = d.getDate()

  return dayNumber;

}

// CHAT //

function addFirebase() {

  firebase.auth().onAuthStateChanged(function (user) {

    if (user) {

      var userName = firebase.auth().currentUser.displayName;

      var userPhoto = firebase.auth().currentUser.photoURL;

      var userMail = firebase.auth().currentUser.email;

      $(".loginDiv").hide();
      $(".logoutDiv").show();

      $(".userPic").attr("src", userPhoto);

      $(".userName").append(userName);

      $(".userMail").append(userMail);

      $(".nolog").hide();
      $(".loged").show();


    } else {

      $(".loginDiv").show();
      $(".logoutDiv").hide();

      $(".userPic").attr("src", "styles/icons/user.png");

      $(".userName").empty();

      $(".userMail").empty();

      $(".nolog").show();
      $(".loged").hide();


    }

  });


  getPosts();

  document.getElementById("login").addEventListener("click", login);

  document.getElementById("logout").addEventListener("click", logout);

  document.getElementById("create-post").addEventListener("click", function () {
    writeNewPost()
  });

}

function login() {

  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);

}

function logout() {

  firebase.auth().signOut().then(function () {

    console.log("victor ya no es un capullo");

  })

}

function writeNewPost() {

  var title = document.getElementById("title").value;
  var text = document.getElementById("body").value;

  // A post entry.

  var postData = {
    title: title,
    body: text,

  };

  // Get a key for a new Post.
  var newPostKey = firebase.database().ref().child("match1").push().key;

  var userName = firebase.auth().currentUser.displayName;

  var updates = {};
  updates["/match1/" + newPostKey] = postData;

  document.getElementById("title").value = "";
  document.getElementById("body").value = "";

  return firebase.database().ref().update(updates);

}

function getPosts() {

  firebase.database().ref("match1").on("value", function (snapshot) {

    var logs = document.getElementById("posts");
    logs.innerHTML = "";
    var posts = snapshot.val();

    for (var key in posts) {

      var text = document.createElement("div");
      var element = posts[key];

      text.append(element.title);

      text.append(element.body);

      logs.append(text);

    }
  })

}
