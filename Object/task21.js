function Deleted(obj = {}, key = "") {
  if (key == "") {
    return;
  }
  delete obj[key];
}

let obj = { name: "ali", age: 20 };

console.log(obj);

Deleted(obj, "age");

console.log(obj);
