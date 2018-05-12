(function() {

  var overlay = document.querySelector("#overlay_wrapper.overlay");
  var formaBth = document.querySelector(".btn-forma_send");
  var closeForm = document.querySelector("#overlay_wrapper .feedback_close");

  if (!overlay || !formaBth || !closeForm) return;

  formaBth.addEventListener("click", function(event) {

    event = event || window.event;
    event.preventDefault();
    overlay.classList.add("overlay--visible");

  }, false);

  closeForm.addEventListener("click", function() {

    overlay.classList.remove("overlay--visible");

  }, false);

})();
