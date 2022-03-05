// alert("hii");
function matchPassword() {
  var pass = document.getElementById("password");

  var confirm_pass = document.getElementById("con_password");
  if (pass.value === confirm_pass.value) {
    alert("confirm");
    pass.value = "";
  } else {
    alert("not confirm");
    confirm_pass.value = "";
    pass.value = "";
  }
}
