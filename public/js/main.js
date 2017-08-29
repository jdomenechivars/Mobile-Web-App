$(document).ready(function () {

  $(".sett").click(function () {
    $(".settingsPanelShadow").show();
  });


  $(".settingsPanelShadow").click(function () {
    $(".settingsPanelShadow").hide();
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

    createSchedule();

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

});


function createSchedule() {

  var matches = data.matches;

  //  console.log(matches);

  var Schedule = $("#schedule");

  $("#schedule").empty();

  for (i = 0; i < matches.length; i++) {

    var game = matches[i];

    var creaGame = document.createElement("div");
    creaGame.setAttribute("class", "game");

    createDateInfo(game, creaGame);
    createTeamsInfo(game, creaGame);
    Schedule.append(creaGame);
  }

}

function createTeamsInfo(game, creaGame) {

  var team1 = game.teams.team1;
  var team2 = game.teams.team2;

  var teams = document.createElement("div");
  teams.setAttribute("class", "gameTeams");

  var firstTeam = document.createElement("p");
  firstTeam.setAttribute("class", "team1");
  firstTeam.innerHTML = team1;

  var secondTeam = document.createElement("p");
  secondTeam.setAttribute("class", "team2");
  secondTeam.innerHTML = team2;

  var VS = document.createElement("p");
  VS.setAttribute("class", "vs");
  VS.innerHTML = " VS ";

  teams.appendChild(firstTeam);
  teams.appendChild(VS);
  teams.appendChild(secondTeam);
  creaGame.appendChild(teams);

}

function createDateInfo(game, creaGame) {

  var day = game.date.day;
  var month = game.date.month;

  var dateTime = month + "-" + day;

  switch (month) {

    case 01:

      month = "January"
      break;

    case 02:

      month = "February"
      break;

    case 03:

      month = "March"
      break;

    case 04:

      month = "April"
      break;

    case 05:

      month = "May"
      break;

    case 06:

      month = "June"
      break;

    case 07:

      month = "July"
      break;

    case 08:

      month = "August"
      break;

    case 09:

      month = "September"
      break;
    case 10:

      month = "October"
      break;

    case 11:

      month = "November"
      break;

    case 12:

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
  creaGame.appendChild(date);

}
