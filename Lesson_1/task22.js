function Copy(obj = {}) {
  var copy = [...obj];
  return copy;
}

let obj = { name: "ali", age: 20 };
console.log(obj);
