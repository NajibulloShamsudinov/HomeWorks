//var savoli1 = prompt("Do you have galstuk");
//var savoli2 = prompt("Do you have forma");
//var savoli3 = prompt("Do you have sumka");
//if (savoli1 == "ho" && savoli2 == "ho" && savoli3 == "ho") {
//  alert("Welcome");
//} else {
// alert("No_Welcome");
//}

const Student = (clothes = false, tie = false, bag = false) => {
  if (clothes && tie && bag) {
    alert("You can");
  } else {
    alert("You can`t");
  }
};
Student(
  confirm("Do you have clother"),
  confirm("Do you have tie"),
  confirm("Do you have bag")
);
