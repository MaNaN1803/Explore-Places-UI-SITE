const categoryImages = {
  "Hostel": "https://images.pexels.com/photos/5137986/pexels-photo-5137986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "Informal Campsite": "https://images.pexels.com/photos/1309587/pexels-photo-1309587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "Wild Camping": "https://images.pexels.com/photos/28903008/pexels-photo-28903008/free-photo-of-camping-in-the-uinta-mountains-utah.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "Established Campground": "https://images.pexels.com/photos/28903008/pexels-photo-28903008/free-photo-of-camping-in-the-uinta-mountains-utah.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "Hotel": "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "Vehicle Shipping": "https://images.pexels.com/photos/6169668/pexels-photo-6169668.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "Shopping": "https://images.pexels.com/photos/346748/pexels-photo-346748.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "Heritage Village": "https://images.pexels.com/photos/158637/sicily-italy-texture-city-158637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "Tourist Attraction": "https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "Wifi": "https://images.pexels.com/photos/10981663/pexels-photo-10981663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "Restaurant": "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "Fuel Station": "https://images.pexels.com/photos/1563510/pexels-photo-1563510.jpeg",
  "Propane": "https://images.pexels.com/photos/15499705/pexels-photo-15499705/free-photo-of-flame-under-balloon.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "Mechanic and Parts": "https://images.pexels.com/photos/2244746/pexels-photo-2244746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "Customs and Immigration": "https://images.pexels.com/photos/1409999/pexels-photo-1409999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "Consulate / Embassy": "https://images.pexels.com/photos/16138196/pexels-photo-16138196/free-photo-of-flags-of-different-countries-on-white-flagpoles.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "Water": "https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "Laundromat": "https://images.pexels.com/photos/4414/black-and-white-clean-housework-launderette.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "Showers": "https://images.pexels.com/photos/4414/black-and-white-clean-housework-launderette.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "Checkpoint": "https://images.pexels.com/photos/2917815/pexels-photo-2917815.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "Financial": "https://images.pexels.com/photos/2917815/pexels-photo-2917815.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "Warning": "https://images.pexels.com/photos/2917815/pexels-photo-2917815.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "Short-term Parking": "https://images.pexels.com/photos/1004409/pexels-photo-1004409.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "Vehicle Storage": "https://images.pexels.com/photos/1004409/pexels-photo-1004409.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "Vehicle Insurance": "https://images.pexels.com/photos/1004409/pexels-photo-1004409.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "Medical": "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "Pet Services": "https://images.pexels.com/photos/19145885/pexels-photo-19145885/free-photo-of-groomer-working-with-dog.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
};

let places = [];

async function loadPlacesData() {
  try {
    const response = await fetch('myData.json');
    if (!response.ok) throw new Error('Failed to load JSON data');

    const jsonData = await response.json();

    places = jsonData.map(entry => ({
      name: entry.Name,
      description: entry.Description,
      state: entry.Location.split(', ')[2], 
      category: entry.Category,
      location: {
        latitude: entry.Latitude,
        longitude: entry.Longitude
      },
      image: categoryImages[entry.Category] || "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }));

    populateCategories();
    renderPlaces(places);
  } catch (error) {
    console.error("Error loading places data:", error);
  }
}

loadPlacesData();