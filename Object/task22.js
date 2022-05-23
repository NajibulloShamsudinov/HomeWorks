function Copy(obj = {}) {
  var copy = [...obj];
  return copy;
}

let obj = { name: "Najib", age: 20 };
console.log(obj);
