let number = document.getElementById("number");
let pinNumber = document.getElementById("pinNumber");
let loginBtn = document.getElementById("loginBtn");
let successAlert = document.getElementById("successAlert");
let errorAlert = document.getElementById("errorAlert");

loginBtn.addEventListener("click", () => {
  if (number.value == "1234" && pinNumber.value == "1234") {
    successAlert.removeAttribute("hidden");
    errorAlert.setAttribute("hidden",true)
    number.value = "";
    pinNumber.value = "";
  } else {
    errorAlert.removeAttribute("hidden");
    
    number.value = "";
    pinNumber.value = "";
  }
});
