//MAKE APEAR THE SETTINGS PANEL//

$(document).ready(function () {
  $(".sett").click(function () {
    $(".settingsPanelShadow").css("display", "block");
  });
});

$(document).ready(function () {
  $(".settingsPanelShadow").click(function () {
    $(".settingsPanelShadow").css("display", "none");
  });
});


$(document).ready(function () {
  $(".menuButtons").click(function () {
    $(this).css("display", "none");

  });
});
