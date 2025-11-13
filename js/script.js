let number = document.getElementById("number");
let pinNumber = document.getElementById("pinNumber");
let loginBtn = document.getElementById("loginBtn");
let pageOne = document.getElementById("pageOne");
let pageTwo = document.getElementById("pageTwo");
let successAlert = document.getElementById("successAlert");
let errorAlert = document.getElementById("errorAlert");

// 1 st Page 
loginBtn.addEventListener("click", () => {
  if (number.value == "1234" && pinNumber.value == "1234") {
    pageOne.setAttribute("hidden",true)
    pageTwo.removeAttribute("hidden")

    // successAlert.removeAttribute("hidden");
    errorAlert.setAttribute("hidden",true)
    number.value = "";
    pinNumber.value = "";
  } else {
    errorAlert.removeAttribute("hidden");
    
    number.value = "";
    pinNumber.value = "";
  }
});
// 1 st Page End 

// Add Mouney Part Start 
let addMoneyPart = document.getElementById("addMoneyPart")
let amountAdd = document.getElementById("amountAdd")
let addMoneyPin = document.getElementById("addMoneyPin")
let addMoneyBtn = document.getElementById("addMoneyBtn")

// Add Mouney Part End

