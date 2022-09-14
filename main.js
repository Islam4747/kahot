let name = prompt("Enter your name");
let password = prompt("Enter the password");
let age = prompt("Enter your age");
let isLogin = prompt("Enter your isLogin");
if (
  name === "Islam" &&
  password >= 123456 &&
  age >= 16 &&
  isLogin === "Islam"
) {
  alert("Welcome, Islam!");
} else if (age >= 16) {
  alert("Hello User!");
} else {
  alert("Forbidden");
}
