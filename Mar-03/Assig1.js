function hidepopup() {
  //   var unsub = document.getElementsByClassName("popup");
  var unsub = document.getElementById("hidepopup");
  unsub.classList.add("d-none");
}

function popupShow() {
  var pop = document.getElementById("hidepopup");
  pop.classList.remove("d-none");
  // pop.classList.add("show");
  // alert("hii");
}
