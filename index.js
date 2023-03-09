const ratingEls = document.querySelectorAll(".rating");

const btnEl = document.getElementById("btn");

const containerEl = document.getElementById("container");

let selectedRating = "";

ratingEls.forEach((ratingEl) => {
  ratingEl.addEventListener("click", (event) => {
    removeActive();
    selectedRating =
      event.target.innerText || event.target.parentNode.innerText;
    event.target.classList.add("active");
    event.target.parentNode.classList.add("active");
  });
});

// The event is used to listen for a click on the rating element and trigger a function when the click occurs. The event object contains information about the event that occurred, such as which element was clicked and any other relevant data.

function removeActive() {
  ratingEls.forEach((ratingEl) => {
    ratingEl.classList.remove("active");
  });
}

btnEl.addEventListener("click", () => {
  if (selectedRating !== "") {
    containerEl.innerHTML = `
        <strong> Thank you!</strong>
        <br> <br>
        <strong>Feedback: ${selectedRating}</strong>
        <p> We'll use your feeback to improve our customer support</p>
        `;
  }
});
