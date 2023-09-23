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
$(".super").click(function () {
  checkClass();
  $(".item:not(.super)").toggleClass("hide");
});
$(".suv").click(function () {
  checkClass();
  $(".item:not(.suv)").toggleClass("hide");
});
$(".muscle").click(function () {
  checkClass();
  $(".item:not(.muscle)").toggleClass("hide");
});
$(".tuner").click(function () {
  checkClass();
  $(".item:not(.tuner)").toggleClass("hide");
});

// Active tag
$(".button").click(function () {
  $(".button").removeClass("active");
  $(this).addClass("active");
});
