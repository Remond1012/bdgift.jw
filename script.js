//Create a birthday wishes card generator. Enter the date and the name, then generate a card using either CSS, SVG or the Canvas API (you can choose which one). Expand this project to include a template system (various designs), and you can expand by using a different technology to replicate the same design (CSS vs Canvas API, for example). You can expand to let people save to disk or print the card.

const generateCard = (name, age, date, theme) => {
  // Set source path
  document.querySelector("#card-h2").innerText = `Life starts at ${age}`;
  document.querySelector("#card-h3").innerText = `Happy Birthday ${name}!`;
  document.querySelector("#card-h4").innerText = date;

  document.querySelector("#card-container").classList.remove("Cake");
  document.querySelector("#card-container").classList.remove("Fireworks");
  document.querySelector("#card-container").classList.add(theme);
};

document.addEventListener("DOMContentLoaded", () => {
  //generateCard("Flavio", 37, "26 Jan 2020");

  document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.querySelector("#name").value;
    const date = document.querySelector("#date").value;
    const age = document.querySelector("#age").value;
    const theme = document.querySelector("#theme").value;

    if (!name) {
      alert("Please enter a name");
      return;
    }
    if (!date) {
      alert("Please enter a date");
      return;
    }
    if (isNaN(age)) {
      alert("Please enter a number");
      return;
    }

    generateCard(name, age, date, theme);

    document.querySelector("#card-container").classList.remove("hidden");
    document.querySelector("#form-container").classList.add("hidden");
  });

  document.querySelector("#back").addEventListener("click", (event) => {
    document.querySelector("#card-container").classList.add("hidden");
    document.querySelector("#form-container").classList.remove("hidden");
  });
});
