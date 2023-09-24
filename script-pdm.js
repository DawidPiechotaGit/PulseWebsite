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

const sortBtn = document.querySelector(".btn-sort");

function sortProductsPriceAscending() {
  sortBtn.innerHTML = "PRICE ↑";
  var gridItems = $(".item");
  gridItems.sort(function (a, b) {
    return (
      $(".vehicle-price", a).data("price") -
      $(".vehicle-price", b).data("price")
    );
  });

  $(".grid").append(gridItems);
}

function sortProductsPriceDescending() {
  sortBtn.innerHTML = "PRICE ↓";
  var gridItems = $(".item");
  gridItems.sort(function (a, b) {
    return (
      $(".vehicle-price", b).data("price") -
      $(".vehicle-price", a).data("price")
    );
  });

  $(".grid").append(gridItems);
}

const vehicleName = document.querySelectorAll(".vehicle-name");

function sortNameAscending() {
  sortBtn.innerHTML = "NAME ↑";
  Array.prototype.slice
    .call(document.body.querySelectorAll(".item"))
    .sort(function sort(ea, eb) {
      var a = ea.textContent.trim();
      var b = eb.textContent.trim();
      if (a < b) return -1;
      if (a > b) return 1;
      return 0;
    })
    .forEach(function (div) {
      div.parentElement.appendChild(div);
    });
}

function sortNameDescending() {
  sortBtn.innerHTML = "NAME ↓";
  Array.prototype.slice
    .call(document.body.querySelectorAll(".item"))
    .sort(function sort(ea, eb) {
      var a = ea.textContent.trim();
      var b = eb.textContent.trim();

      if (a > b) return -1;
      if (a < b) return 1;
      return 0;
    })
    .forEach(function (div) {
      div.parentElement.appendChild(div);
    });
}

sortNameAscending();

const buttonDown = document.querySelector(".btn-pricedown");
const buttonUp = document.querySelector(".btn-priceup");
const buttonNameDown = document.querySelector(".btn-namedown");
const buttonNameUp = document.querySelector(".btn-nameup");

buttonDown.addEventListener("click", sortProductsPriceAscending);
buttonUp.addEventListener("click", sortProductsPriceDescending);
buttonNameDown.addEventListener("click", sortNameAscending);
buttonNameUp.addEventListener("click", sortNameDescending);
