// HOW TO PLAY MODAL

// Get the modal
var playModal = document.getElementById("playModal");
var modalBtn = document.getElementById("modalBtn");
var playModalClose = document.getElementById("playModalClose");



// TRAP MODAL
// Get the modal
var trapModal = document.getElementById("trapModal");
var trapModalClose = document.getElementById("trapModalClose");


// open modal on userclick
modalBtn.onclick = function() {
  playModal.style.display = "block";
}



// outside click on modal
window.onclick = function(event) {

    console.log(event.target)

    if (event.target === playModal || event.target === playModalClose) {
      playModal.style.display = "none";
    }


    if (event.target === trapModal) {
      trapModal.style.display = "none";
    }

    // close modal
    trapModalClose.onclick = function() {
      trapModal.style.display = "none";
    }

}
