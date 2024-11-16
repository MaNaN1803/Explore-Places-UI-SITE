const placesContainer = document.getElementById("placesContainer");
const categoryFilter = document.getElementById("categoryFilter");

function populateCategories() {
  const categories = [...new Set(places.map(place => place.category))];
  categories.forEach(category => {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    categoryFilter.appendChild(option);
  });
}

function renderPlaces(filteredPlaces) {
  placesContainer.innerHTML = "";
  filteredPlaces.forEach(place => {
    const tile = document.createElement("div");
    tile.classList.add("place-tile");

    tile.style.backgroundImage = `url(${place.image})`;
    tile.innerHTML = `
      <div class="place-name">${place.name}</div>
      <div class="hover-overlay">
        <h2>${place.name}</h2>
        <p>${place.description}</p>
        <p><strong>State:</strong> ${place.state}</p>
        <p><strong>Category:</strong> ${place.category}</p>
        <a href="https://www.google.com/maps?q=${place.location.latitude},${place.location.longitude}" 
           class="view-map" target="_blank">📍🗺️ View on Map</a>
      </div>
    `;

    placesContainer.appendChild(tile);
  });
}

function filterPlaces() {
  const selectedCategory = categoryFilter.value;
  const filteredPlaces = selectedCategory === "all"
    ? places
    : places.filter(place => place.category === selectedCategory);
  renderPlaces(filteredPlaces);
}

categoryFilter.addEventListener("change", filterPlaces);
