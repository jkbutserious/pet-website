$(document).ready(function() {
  $("button#dark-mode").click(function() {
    $("body").removeClass();
    $("body").addClass("dark-background");
  });
});

$(document).ready(function() {
  $("button#light-mode").click(function() {
    $("body").removeClass();
    $("body").addClass("light-background");
  });
});