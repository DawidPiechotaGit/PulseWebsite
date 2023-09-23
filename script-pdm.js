// Check active classes
var checkClass = function () {
  if ($(".item").hasClass("hide")) {
    $(".item").removeClass("hide");
  }
};

// Category filters
$(".all").click(function () {
  checkClass();
});
$(".sport").click(function () {
  checkClass();
  $(".item:not(.sport)").toggleClass("hide");
});
$(".white").click(function () {
  checkClass();
  $(".item:not(.white)").toggleClass("hide");
});
$(".grey").click(function () {
  checkClass();
  $(".item:not(.grey)").toggleClass("hide");
});
$(".yellow").click(function () {
  checkClass();
  $(".item:not(.yellow)").toggleClass("hide");
});
$(".red").click(function () {
  checkClass();
  $(".item:not(.red)").toggleClass("hide");
});

// Active tag
$(".button").click(function () {
  $(".button").removeClass("active");
  $(this).addClass("active");
});
