// example1

document.getElementById("changeTextButton").addEventListener("click", () => {
  let para = document.querySelector("p");
  para.innerHTML = "The paragraph is changed!";
});

// example2

document.querySelector("#highlightFirstCity").addEventListener("click", () => {
  let cityList = document.querySelector("#citiesList");
  cityList.firstElementChild.classList.add("highlight");
});

// example3

document.querySelector("#changeOrder").addEventListener("click", () => {
  let orderType = document.querySelector("#coffeeType");
  orderType.innerHTML = "Espresso";
  orderType.style.backgroundColor = "brown";
  orderType.style.padding = "5px";
  orderType.style.borderRadius = "5px";
});

// example4

document.querySelector("#addNewItem").addEventListener("click", () => {
  let shoppingList = document.querySelector("#shoppingList");
  let newItem = document.createElement("li");
  newItem.innerHTML = "Eggs";
  shoppingList.appendChild(newItem);
});

// example5

document.getElementById("removeLastTask").addEventListener("click", () => {
  let taskList = document.getElementById("taskList");
  taskList.lastElementChild.remove();
});

// example6

document.querySelector("#clickMeButton").addEventListener("click", function () {
  alert("chaicode");
});

// example7

document.querySelector("#teaList").addEventListener("click", (e) => {
  if (e.target && e.target.matches('.teaItem')) {
    console.log("You selected: " + e.target.textContent);
  }
  const teaItem = document.querySelectorAll(".teaItem");

});

// example8

document.getElementById("feedbackForm").addEventListener("submit", function (e) {
  e.preventDefault();
  let feedback = document.querySelector("#feedbackInput").value;
  console.log(feedback);
  document.getElementById("feedbackDisplay").textContent = `Feedback is ${feedback}`;
});

// example9

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("domStatus").textContent = "DOM Fully loaded";
});

// example10

document.getElementById("toggleHighlight").addEventListener("click", function () {
  const descriptiontext = document.getElementById("descriptionText");
  descriptiontext.classList.toggle("highlight");
});