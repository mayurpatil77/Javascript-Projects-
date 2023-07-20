let detectButton = document.querySelector("#detectButton");
let locationText = document.querySelector("#location");


detectButton.addEventListener("click",()=>{
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showLocation, checkError);
      } else {
        locationText.innerText = "The browser does not support geolocation";
      }
    });
    

    const checkError = (error) => {
        switch (error.code) {
          case error.PERMISSION_DENIED:
            locationText.innerText = "Please allow access to location";
            break;
          case error.POSITION_UNAVAILABLE:
            locationText.innerText = "Location Information unavailable";
            break;
          case error.TIMEOUT:
            locationText.innerText = "The request to get user location timed out";
        }
      };      
      

    const showLocation = async (position) => {
        let response = await fetch(
          `https://nominatim.openstreetmap.org/reverse?lat=${position.coords.latitude}&lon=${position.coords.longitude}&format=json`
        );
        let data = await response.json();
        locationText.innerText = ` ${data.address.city} (${data.address.postcode}) , ${data.address.country.toUpperCase()}`;
      };
      