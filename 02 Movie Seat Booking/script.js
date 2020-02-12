// select all elements from the DOM

const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row.seat:not(.occupied)");
const count = document.getElementById("count");
const total = document.getElementById("total");
const movieSelect = document.getElementById("movie");

let ticketPrice = +movieSelect.value;

// Update total and count
function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll(".row .seat.selected");
  //   console.log(selectedSeats);
  const selectedSeatsCount = selectedSeats.length;

  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice;
}

// movie select event

movieSelect.addEventListener("change", e => {
  ticketPrice = +e.target.value;
  updateSelectedCount();
});

// seat click event
container.addEventListener("click", e => {
  //   console.log(e.target);
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("occupied")
  ) {
    // console.log(e.target);
    e.target.classList.toggle("selected");

    updateSelectedCount();
  }
});
