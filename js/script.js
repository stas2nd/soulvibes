var ESC_KEYCODE = 27;
var SPACE_KEYCODE = 32;
var ENTER_KEYCODE = 13;

var link = document.querySelector(".searching-hotels__link");
var searchingform = document.querySelector(".searching-form");
var filterform = document.querySelector(".filter-form");
var sortlist = document.querySelector(".sort-list");

var rangefield = document.querySelector(".price-day__range-field");

var people = document.querySelector(".people");
var signminus = document.querySelectorAll(".sign_minus");
var signplus = document.querySelectorAll(".sign_plus");
var adults = document.getElementById("adults");
var children = document.getElementById("children");

if (link && searchingform) {
    link.addEventListener("click", function (evt) {
        evt.preventDefault();
        searchingform.classList.toggle("display_flex");
    });
}

if (people) {
    people.addEventListener("click", function (evt){
        if (evt.target.classList.contains("sign_minus") && evt.target.classList.contains("sign_adults")) {
            if (adults.value <= 0) {
                adults.value = 0;
            } else {
                adults.value--;
            }
        }
        else if (evt.target.classList.contains("sign_plus") && evt.target.classList.contains("sign_adults")) {
            adults.value++;
        }
        else if (evt.target.classList.contains("sign_minus") && evt.target.classList.contains("sign_children")) {
            if (children.value <= 0) {
                children.value = 0;
            } else {
                children.value--;
            }
        }
        else if (evt.target.classList.contains("sign_plus") && evt.target.classList.contains("sign_children")) {
            children.value++;
        }
    });
}

if (adults || children) {
  document.addEventListener("keydown", function (evt) {
    if (evt.keyCode === SPACE_KEYCODE) {
      if (document.activeElement.classList.contains("sign")) {
        evt.preventDefault();
        document.activeElement.click();
      }
    }
  });
}


