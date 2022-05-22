let isDoorOpen = true;
function handlModal(door) {
  isDoorOpen = door;
}
handlModal(false);
console.log(isDoorOpen);
handlModal(true);
console.log(isDoorOpen);
