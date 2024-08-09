let age = 25;

if (age <= 12) {
  console.log("child");
} else if (age <= 18) {
  console.log("teen");
} else {
  console.log("adult");
}

switch (true) {
  case (age <= 12):
    console.log("child");
    break;

  case (age <= 18):
    console.log("teen");
    break;

  default:
    console.log("adult");
}
