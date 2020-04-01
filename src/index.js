let car = { color: "blue", model: "Sandero", doors: 4 };
const app = document.getElementById("app");

// Create an array with the object's enumerable keys
const keys = Object.keys(car);
app.insertAdjacentHTML(
  "beforeend",
  "The car's keys (properties) are:  " + keys.join(", ")
);
