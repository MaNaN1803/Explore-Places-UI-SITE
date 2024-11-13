const imageUrls = [
  "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/1687845/pexels-photo-1687845.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
];

let places = [];

async function loadPlaces() {
  try {
    const response = await fetch('places.json');
    if (!response.ok) throw new Error('Failed to load JSON data');
    
    const jsonData = await response.json();

    
    places = jsonData.map((entry, index) => ({
      name: entry.name,
      description: entry.description,
      location: {
        latitude: entry.location.latitude,
        longitude: entry.location.longitude
      },
      category: {
        name: entry.category.name
      },
   
      image: imageUrls[index % imageUrls.length]
    }));

 
    populateCategories();
    renderPlaces(places);
  } catch (error) {
    console.error("Error loading places data:", error);
  }
}

loadPlaces();
