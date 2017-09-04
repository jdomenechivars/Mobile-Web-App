// BUTTONS BEHAIVOR //

$(document).ready(function () {

  $("#scores").hide();
  $("#teams").hide();

  $(".aback").click(function () {

    $("#title").empty();
    $("#title").append("NYSL - APP");

    $("#mainBackground").show();
    $("#news").hide();
    $("#schedule").hide();
    $("#scores").hide();
    $("#teams").hide();
    $("#chat").hide();
    $('#contact').hide();
    $(".aback").hide();
    $(".menu1").show();
    $(".menu2").hide();

  });

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
    $("#title").append("STADIUMS ");

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

  addFirebase();

});

// NEWS PAGE CREATOR //

$.getJSON("json/news.json", function (data) {

  createNews(data);

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

  $(".new").click(function () {

    $(this).children(".newsContent").toggle();
    $(this).children(".plusIcon").toggle();
    $(this).children(".minusIcon").toggle();

  });

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


  $(".event").click(function () {

    $(this).children(".eventContent").toggle();
    $(this).children(".plusIcon").toggle();
    $(this).children(".minusIcon").toggle();

  });

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

    var creaHidedInfo = document.createElement("div");
    creaHidedInfo.setAttribute("class", "hidedInfo");


    creaGame.appendChild(creaShowedInfo);
    creaGame.appendChild(creaHidedInfo);

    createDateInfo(game, creaShowedInfo);
    createTeamsInfo(game, creaShowedInfo);
    createTimeInfo(game, creaHidedInfo);
    createFieldInfo(game, creaHidedInfo, stad);

    schedule.append(creaGame);

  }

  $(".hidedInfo").hide();
  $(".adressDiv").hide();

  $(".showedInfo").click(function () {
    $(this).next().toggle();
    $(this).next().children(".adressDiv").hide();
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

function createTimeInfo(game, creaHidedInfo) {

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
  creaHidedInfo.appendChild(timeDiv);

}

function createFieldInfo(game, creaHidedInfo, stad) {

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

      creaHidedInfo.appendChild(stadiumDiv);

      moreFieldInfo(thatField, creaHidedInfo);

    }

  }

}

function moreFieldInfo(thatField, creaHidedInfo) {

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
  creaHidedInfo.appendChild(adressDiv);

}

// STADIUMS PAGE CREATOR //

$.getJSON("json/stadiums.json", function (data3) {

  createStadiums(data3);

})

function createStadiums(data3) {

  var teamsPage = $("#teams");

  var stadiums = data3.stadiums;

  stadiums.sort(compareName);

  for (v = 0; v < stadiums.length; v++) {

    var eachStadium = stadiums[v];

    var stadiumDiv = document.createElement("div");
    stadiumDiv.setAttribute("class", "stadDiv");
    teamsPage.append(stadiumDiv);

    var stadiumName = document.createElement("div");
    stadiumName.setAttribute("class", "stadiumName");
    stadiumDiv.appendChild(stadiumName);

    var stadiumTitle = document.createElement("p");
    stadiumTitle.setAttribute("class", "stadiumShort");
    stadiumTitle.innerHTML = eachStadium.short;
    stadiumName.appendChild(stadiumTitle);

    var info = document.createElement("div");
    info.setAttribute("class", "infoStadDiv");
    stadiumDiv.appendChild(info);

    var stadiumName = document.createElement("div");
    stadiumName.setAttribute("class", "stadiumFullName");
    stadiumName.innerHTML = eachStadium.name;
    info.appendChild(stadiumName);

    var facility = document.createElement("div");
    facility.setAttribute("class", "facility");
    facility.innerHTML = "Facility type: " + eachStadium.facility;
    info.appendChild(facility);

    var street = eachStadium.adress.street;
    var locality = eachStadium.adress.locality;
    var region = eachStadium.adress.region;
    var postalcode = eachStadium.adress.postalcode;
    var ubication = eachStadium.ubication;

    var firstLineAdress = street + ","
    var secondLineAdress = locality + ", " + region + " " + postalcode;

    var adressDiv = document.createElement("div");
    adressDiv.setAttribute("class", "stadiumAdressDiv");

    var stadiumStreet = document.createElement("p");
    stadiumStreet.setAttribute("class", "stadStreet");
    stadiumStreet.innerHTML = firstLineAdress;

    var stadiumLocality = document.createElement("p");
    stadiumLocality.setAttribute("class", "stadLocality");
    stadiumLocality.innerHTML = secondLineAdress;

    adressDiv.appendChild(stadiumStreet);
    adressDiv.appendChild(stadiumLocality);
    info.appendChild(adressDiv);

    var iframe = document.createElement("div");
    iframe.setAttribute("class", "iframe");
    iframe.innerHTML = eachStadium.iframe;

    info.appendChild(iframe);


  }

  $(".infoStadDiv").hide();
  $(".iframe").hide();
  $(".stadiumName").click(function () {

    $(this).siblings().slideToggle();
    $(this).next().children(".iframe").fadeToggle(4000);

  });

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

  for (var z = 0; z < matches.length; z++) {

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

function compareName(a, b) {

  if (parseFloat(a.short) < parseFloat(b.short))
    return -1;
  if (parseFloat(a.short) > parseFloat(b.short))
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

  var $cont = $('#posts');

  getPosts($cont);

  document.getElementById("login").addEventListener("click", login);

  document.getElementById("logout").addEventListener("click", logout);

  document.getElementById("create-post").addEventListener("click", function () {
    writeNewPost();
    $cont[0].scrollTop = $cont[0].scrollHeight;

  });

  $('#body').keyup(function (e) {
    if (e.keyCode == 13) {
      writeNewPost();
      $cont[0].scrollTop = $cont[0].scrollHeight;
    }
  })

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

  var text = document.getElementById("body").value;

  var userName = firebase.auth().currentUser.displayName;

  var userPhoto = firebase.auth().currentUser.photoURL;

  // A post entry.

  var postData = {
    photo: userPhoto,
    user: userName,
    body: text,

  };

  // Get a key for a new Post.
  var newPostKey = firebase.database().ref().child("match1").push().key;

  var updates = {};
  updates["/match1/" + newPostKey] = postData;

  document.getElementById("body").value = "";

  return firebase.database().ref().update(updates);

}

function getPosts() {

  firebase.database().ref("match1").on("value", function (snapshot) {

    var logs = document.getElementById("posts");
    logs.innerHTML = "";
    var posts = snapshot.val();

    for (var key in posts) {

      var element = posts[key];
      var myName = firebase.auth().currentUser.displayName;


      var eachPost = document.createElement("div");

      var chatPic = document.createElement("div");
      chatPic.setAttribute("class", "chatPic");

      var pic = document.createElement("img");
      pic.setAttribute("class", "pic");
      pic.setAttribute("src", element.photo);

      chatPic.appendChild(pic);
      eachPost.appendChild(chatPic);

      var bubles = document.createElement("div");


      var userNameChat = document.createElement("p");
      userNameChat.innerHTML = element.user;
      userNameChat.setAttribute("class", "userNameChat")

      var text = document.createElement("p");
      text.setAttribute("class", "bubblesText");


      if (element.user == myName) {
        eachPost.setAttribute("class", "myChat");
        bubles.setAttribute("class", "myBubbles");
      } else {
        eachPost.setAttribute("class", "eachPost");
        bubles.setAttribute("class", "bubbles");
      }

      text.innerHTML = element.body;
      bubles.appendChild(userNameChat);
      bubles.appendChild(text);
      eachPost.appendChild(bubles);

      logs.appendChild(eachPost);

    }
  })

}
