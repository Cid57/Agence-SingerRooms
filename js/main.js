function filterOffers() {
  const searchInput = document
    .getElementById("search-input")
    .value.toLowerCase();
  const offerElems = document.querySelectorAll(".offer-elem");

  offerElems.forEach((elem) => {
    const city = elem.getAttribute("data-city").toLowerCase();
    if (city.includes(searchInput)) {
      elem.style.display = "";
    } else {
      elem.style.display = "none";
    }
  });
}

function handleKeyPress(event) {
  if (event.key === "Enter") {
    filterOffers();
  }
}
