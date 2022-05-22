function changeName(obj = {}, key = "", value = "") {
  if (key == "") {
    return;
  }
  obj[key] = value;
}

let obj = { name: "ali", age: 20 };
let obj1 = { name: "win", age: 22 };

console.log(obj);
changeName(obj, "name", "bot");
changeName(obj, "age", 21);
changeName(obj1, "tel", "123456789");

console.log(obj);
console.log(obj1);

