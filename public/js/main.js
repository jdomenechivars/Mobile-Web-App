$(document).ready(function () {


  $(".sett").click(function () {
    $(".settingsPanelShadow").show("slide");
  });


  $(".settingsPanelShadow").click(function () {
    $(".settingsPanelShadow").hide("slide");
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


$.getJSON("json/stadiums.json", function (data2) {

  var stad = data2;


  $.getJSON("json/schedule.json", function (data) {

    createSchedule(data, stad);

  });

});



function createSchedule(data, stad) {

  var matches = data.matches;

  var Schedule = $("#schedule");

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

    Schedule.append(creaGame);

  }

  $(".timeDiv").hide();
  $(".stadiumDiv").hide();
  $(".adressDiv").hide();



  $(".showedInfo").click(function () {

    $(this).next().toggle();
    $(this).siblings(".stadiumDiv").toggle();


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
