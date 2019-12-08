// Get the modal
var modal = document.getElementById("playModal");
var btn = document.getElementById("modalBtn");
var span = document.getElementsByClassName("close")[0];

// open modal on userclick
btn.onclick = function() {
  modal.style.display = "block";
}

// outside click on modal
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }

// close modal
span.onclick = function() {
  modal.style.display = "none";
}


}