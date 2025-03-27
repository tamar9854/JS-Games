const name = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const message = document.getElementById("message");

const formError = document.getElementById("formError");
const errorMessage = document.getElementById("errorMessage");

function validateForm() {
  let ok = true;
  let error = "";

  if (name.value.length < 2) {
    ok = false;
    error = "Name must have at least 2 letters";
  }
  if (
    email.value[0].toUpperCase() < "A" ||
    email.value[0].toUpperCase() > "Z"
  ) {
    ok = false;
    error = "Email must begin with a letter";
  }
  if (phone.value.length != 10) {
    ok = false;
    error = "Mobile phone must have 10 digits";
  }
  for (let i = 0; i < phone.value.length; i++) {
    if (phone.value[i] < "0" || phone.value[i] > "9") {
      ok = false;
      error = "Mobile phone can have only digits";
    }
  }
  if (message.value.length < 5) {
    ok = false;
    error = "Message must have at least 5 letter";
  }
  if (!ok) {
    formError.classList.toggle("form-error_hide");
    errorMessage.textContent = error;
  }
  return ok;
}
