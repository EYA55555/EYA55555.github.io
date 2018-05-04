(function() {

  var overlay = document.querySelector(".overlay");
  var formaBth = document.querySelector("#feedback-send");
  var closeForm = document.querySelector(".feedback__close");

  /*if (!overlay || !formaBth || !closeForm) return;*/

  formaBth.addEventListener("click", function(event) {

    event = event || window.event;
    event.preventDefault();
    /*overlay.style.display = "block";*/
    overlay.classList.add("overlay-visible");

  }, false);

  closeForm.addEventListener("click", function() {

    /*overlay.style.display = "none";*/
    overlay.classList.remove("overlay-visible");

  }, false);

})();


