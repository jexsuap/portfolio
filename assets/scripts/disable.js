window.onload = function() {
  document.addEventListener("keydown", function(e) {
    if (event.keyCode == 123) {
      disabledEvent(e);
    }
  }, false);
};
