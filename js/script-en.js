$('.index_links').on('click', function(){
  $('a').fadeOut(400, function() {});
});

$("#darkmode").click(function(){
  if($("#darkmode").html() === "Dark mode") {
      $("body").css("background", "#161616");
      $(".panel").css("color", "white");
      $(".panel").css("background-color", "#161616");
      $("i").css("color", "white");
      $("#darkmode").html("Light mode");
  } else if($("#darkmode").html() === "Light mode") {
      $(".panel").css("color", "black");
      $(".panel").css("background-color", "white");
      $("body").css("background", "-webkit-linear-gradient(top,  #00c1fc 0%,#007fad 100%)");
      $("#darkmode").html("Dark mode");
  }
});
