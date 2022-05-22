var age = +prompt("Your years old:");
const date = new Date();
year = date.getFullYear() - age;
if (year >= 18) {
  alert("Welcome");
} else {
  alert("NoWelcome");
}
