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

    //    createSchedule();

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


$.getJSON("json/schedule.json", function (data) {

  createSchedule(data);

});


function createSchedule(data) {

  var matches = data.matches;

  var Schedule = $("#schedule");

  $("#schedule").empty();

  for (i = 0; i < matches.length; i++) {

    var game = matches[i];

    var creaGame = document.createElement("div");
    creaGame.setAttribute("class", "game");

    createDateInfo(game, creaGame);
    createTeamsInfo(game, creaGame);
    createTimeInfo(game, creaGame);
    createFieldInfo(game, creaGame);
    
      $(".game").click(function () {

    $(this).children(".field").toggle();
    $(this).children(".gameTime").toggle();


  });

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
  VS.innerHTML = " VS. ";

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
  creaGame.appendChild(date);

}

function createTimeInfo(game, creaGame) {

  var hour = game.date.time.hour;
  var minuts = game.date.time.minuts;
  var period = game.date.time.period;

  var time = hour + ":" + minuts;
  var timePeriod = "Time: " + time + " " + period;

  var timeP = document.createElement("p");
  timeP.setAttribute("class", "gameHour")

  var gameTime = document.createElement("time");
  gameTime.setAttribute("datetime", time);
  gameTime.setAttribute("class", "gameTime");
  timeP.innerHTML = timePeriod;
  gameTime.appendChild(timeP);
  creaGame.appendChild(gameTime);

}

function createFieldInfo(game, creaGame, stad) {

  var field = game.location;

  var fieldDiv = document.createElement("div");
  fieldDiv.setAttribute("class", "field");

  $.getJSON("json/stadiums.json", function (stad) {

    var stadiums = stad.stadiums;

    for (j = 0; j < stadiums.length; j++) {

      var eachStadium = stadiums[j];

      if (field == stadiums[j].short) {

        var thatField = stadiums[j];

        var fieldP = document.createElement("p");
        fieldP.setAttribute("class", "gameStadium");
        fieldP.innerHTML = thatField.name;
        fieldDiv.appendChild(fieldP);

        moreFieldInfo(thatField, fieldDiv);

      }

      creaGame.appendChild(fieldDiv);

    }

  });

}

function moreFieldInfo(thatField, fieldDiv) {

  var stadiumInfo = document.createElement("div");
  stadiumInfo.setAttribute("class", "stadiumInfo");

  var street = thatField.adress.street;
  var locality = thatField.adress.locality;
  var region = thatField.adress.region;
  var postalcode = thatField.adress.postalcode;

  var firstLineAdress = street + ","
  var secondLineAdress = locality + ", " + region + " " + postalcode;

  var adressDiv = document.createElement("div");
  adressDiv.setAttribute("class", "adressDiv");

  var stadiumStreet = document.createElement("p");
  stadiumStreet.setAttribute("class", "stadiumStreet");
  stadiumStreet.innerHTML = firstLineAdress;

  var stadiumLocality = document.createElement("p");
  stadiumLocality.setAttribute("class", "stadiumLocality");
  stadiumLocality.innerHTML = secondLineAdress;

  adressDiv.appendChild(stadiumStreet);
  adressDiv.appendChild(stadiumLocality);

  fieldDiv.appendChild(adressDiv);

}
