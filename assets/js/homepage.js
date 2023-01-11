console.log('its working')
$(document).ready(function () {

    // Search Button Click Returns City Data
    let searchBtn = $('.btn');

    searchBtn.on("click", function (event) {
        event.preventDefault();
        console.log(event)
    });

});

// Test 
let cityLat = 40.71;
let cityLon = 74.00;

function convertCoordToCity(cityLat, cityLon) {
    const apiKey = "afd33b0e86527754a90c68a766e2e8bd";
    let generatedURL = `https://api.openweathermap.org/data/3.0/onecall?lat=${cityLat}&lon=${cityLon}&appid=${apiKey}`
    console.log(generatedURL);
    // fetch from URL 
    fetch(generatedURL).then(function(response) {
                response.json().then(function(data) {
                  console.log(data);
})
    })
}
convertCoordToCity(cityLat, cityLon);

// const getCityData = function(city) { 
//     const apiKey = "20ff9d6fd2f1900b030e81eb384d77c9";
//     let cityName = "London,us"
//     // format api url
//     const apiUrl = "api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=" + apiKey

//      // make a request to the url
//      fetch(apiUrl).then(function(response) {
//         response.json().then(function(data) {
//           console.log(data);
//         });
//       });
//     };
//     getCityData();

//     var userFormEl = document.querySelector("#user-form");
//     var nameInputEl = document.querySelector("#username");
    
//     var formSubmitHandler = function(event) {
//         event.preventDefault();
//         // get value from input element
//         var username = nameInputEl.value.trim();
    
//         if (username) {
//             getCityData(username);
//             nameInputEl.value = "";
//         } else {
//             alert("Please enter a City Name");
//     }
//         console.log(event);
//       };
    
//     userFormEl.addEventListener("submit", formSubmitHandler);