function user() {
  let name = document.forme.usern.value.trim();
  let email = document.forme.usere.value.trim();
  let phone = document.forme.userp.value.trim();
  let errorName = "";
  let errorEmail = "";
  let errorPhone = "";
  let validMarker = true;
  const emailPattern = /^(?!.*\.\.)[\w.\-#!$%&'*+\/=?^_`{}|~]{1,35}@[\w.\-]+\.[a-zA-Z]{2,15}$/;
  const phonePattern = /^0[2-9]\d{7,8}$/gm;

  if (name.length < 2 || name.length > 255) {
    validMarker = false;
    errorName = "* Enter a valid name please";
  }
  console.log(validMarker);
  if (!emailPattern.test(email)) {
    validMarker = false;
    errorEmail = "* Enter a valid email address please";
  }
  console.log(validMarker);
  if (!phonePattern.test(phone)) {
    validMarker = false;
    errorPhone = "* Enter a valid phone number please";
  }
  console.log(validMarker);
  document.getElementById("errorName").innerHTML = errorName;
  document.getElementById("errorEmail").innerHTML = errorEmail;
  document.getElementById("errorPhone").innerHTML = errorPhone;

  if (!validMarker) return;

  document.location.href = "./thanks.html";
}
