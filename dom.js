// Exercise
// 1. Create folder DOM_lesson
// 2. index.html , index.js
// 3. index.html  1 shirheg div, script tag-tai
// 4. create new P tag and give innerHTML context and append parent DIV with it.
// 5. Use replace it with div tag
// 6. Create button using p tag and append parent
// 7. Add style attribute in button element button
// 8. Show alert when button clicked by using event listener
// 9. Create p tag that contains "Hello wolrd title" and change the color when element mouseover
// 10. Add class name using classList
// const parent=document.getElementById("parent-container");
document.body.style.width = "100%";
document.body.style.textAlign = "center";

const loginTitle = document.createElement("p");
loginTitle.innerHTML = "Login";
loginTitle.style.fontsize = "60px";
loginTitle.style.fontWeight = "bold";
document.getElementById("parent_container").appendChild(loginTitle);

const emailContainer = document.createElement("div");
emailContainer.id = "email_Container";
document.getElementById("parent_container").appendChild(emailContainer);

const passwordContainer = document.createElement("div");
passwordContainer.id = "password_Container";
document.getElementById("parent_container").appendChild(passwordContainer); //

const emailTitle = document.createElement("p");
emailTitle.innerHTML = "email";
document.getElementById("email_Container").appendChild(emailTitle);

const emailInput = document.createElement("input");
document.getElementById("email_Container").appendChild(emailInput);

const passwordTitle = document.createElement("p");
passwordTitle.innerHTML = "password";
document.getElementById("password_Container").appendChild(passwordTitle);

const passwordInput = document.createElement("input");
document.getElementById("password_Container").appendChild(passwordInput);

const button = document.createElement("p");
button.innerHTML = "submit";
button.style.background = "green";
button.style.padding = "5px";
button.style.width = "50px";
button.style.margin = "auto";
button.style.marginTop = "10px";
document.getElementById("parent_container").appendChild(button);
button.addEventListener("click", () => {
  if (
    emailInput.value.includes("@gmail.com") &&
    passwordInput.value.length >= 8
  ) {
    alert;
  } else {
    const warning = document.createElement("p");
    warning.innerHTML = "Please enter valid email";
    warning.style.color = "red";
    document.getElementById("email_Container").appendChild(warning);
  }
  if (passwordInput.value.length >= 8) {
    console.log("=========================");
    console.log(true);
    console.log("==========================");
  } else {
    const warning = document.createElement("p");
    warning.innerHTML = "Password should contain 8 character";
    warning.style.color = "red";
    document.getElementById("password_Container").appendChild(warning);
  }
});
