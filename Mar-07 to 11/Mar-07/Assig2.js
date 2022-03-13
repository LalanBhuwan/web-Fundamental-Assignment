function changeDiv(div_id) {
  var home = document.getElementById("home-container-id");
  var search = document.getElementById("search-container-id");
  var profile = document.getElementById("profile-container-id");

  if (div_id === "01") {
    home.style.display = "initial";
    search.style.display = "none";
    profile.style.display = "none";
  } else if (div_id === "02") {
    home.style.display = "none";
    search.style.display = "initial";
    profile.style.display = "none";
  } else if (div_id === "05") {
    home.style.display = "none";
    search.style.display = "none";
    profile.style.display = "initial";
  }
}
