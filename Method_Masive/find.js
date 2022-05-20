// yakm znacheniyai da function guftagimona nishon meta tamom!

var users = [
  {
    name: "alie",
  },
  {
    name: "carrie",
  },
  {
    name: "carrie",
  },
];
var user = [];
user = users.find(function (user) {
  return user.name === "carrie";
});
console.log(user); //{name: "carrie"}
