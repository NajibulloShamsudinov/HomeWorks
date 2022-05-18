const arr = ["najib", "golib", 22, "suhrob"];
// dobavit elementi
arr.splice(2, 0, "mehroj", "shavkat");
console.log(arr);
// udalyaet elementi
arr.splice(2, 1);
console.log(arr);

var fruits = ["Banana", "Orange", "Apple", "Mango"];
// At position 2, add 2 elements, remove 1:
fruits.splice(2, 1, "Lemon", "Kiwi");
console.log(fruits);
