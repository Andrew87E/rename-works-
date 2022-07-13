// total rewrite
// road trip planner
// integrate with google maps
// integrate with spotify to make new road trip playlist || same length as road trip
// integrate with weather to check road conditions
// road conditions api?? {icebox}
// api to check specs of car
// gas stations along route? icebox?
// ical google cal for road trip
// progress bar for calculations

var aeAirAPI = "3a02828a79b9963";
var arrivalLocation = $("#arrival").val();
var arrivalDate = $("#arrival-date").val();
var departureDate = $("#departure-date").val();
var departureLocation = $("#departure").val();
var numberOfPass = $("#num-pass").val();
var tripFuelCost = "";
var milesPerGallon = $("#miles-per-gallon").val();
var gasResultEl = $("gas-results-section");
var milesToDrive = "";
var itinerary = $("#itinerary").val();
var classType = $("#select-class").val();
var flightEl = $(".userInput");
var initalEl = $(".login-box");
var costToDriveEl = $(".results");
var regularFuel = $("#reg-fuel");
var premiumFuel = $("#prem-fuel");
var dieselFuel = $("#diesel-fuel");
var defaultPremiumCost = 4.95;
var defaultRegularCost = 4.45;
var defaultDieselCost = 5.06;
var defaultMpg = 20;
var mpg = $("#miles-per-gallon");
var hero = $(".hero");
var initSubmit = $("#init-submit");
var driveCheck = $("#drive-check");

// var weatherApiKey = '76dea1d2eaa53c39fea214a799bab840'
// var weatherApiCall = `https://api.openweathermap.org/data/3.0/onecall?lat=${destLatitude}&lon=${destLongitude}&exclude={part}&appid=${weatherApiKey}`
var initalEl = $(".login-box");
// var costToDriveEl = $(".results");
var initSubmit = $("#init-submit");
// var driveCheck = $("#drive-check");


// navbar burger menu
document.addEventListener("DOMContentLoaded", () => {
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );
  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach((el) => {
      el.addEventListener("click", () => {
        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle("is-active");
        $target.classList.toggle("is-active");
      });
    });
  }
});


function generateFuelCost() {
  hero.append(
    '<div class="ae-transparent gas-cost">' +
      "<h1>" +
      "Gas Cost" +
      "</h1>" +
      "</div>"
  );
  var gasInfo = $(".gas-info");
  if (regularFuel.prop("checked")) {
    gasInfo.append(
      '<div class="gas-cost">' +
        "<h2>" +
        "Regular Fuel Cost: " +
        "$" +
        // regFuelCost +
        "</h2>" +
        "</div>"
    );
  } else if (premiumFuel.prop("checked")) {
    gasInfo.append(
      '<div class="gas-cost">' +
        "<h2>" +
        "Premium Fuel Cost: " +
        "$" +
        // premFuelCost +
        "</h2>" +
        "</div>"
    );
  } else if (dieselFuel.prop("checked")) {
    gasInfo.append(
      '<div class="gas-cost">' +
        "<h2>" +
        "Diesel Fuel Cost: " +
        "$" +
        // dieselFuelCost +
        "</h2>" +
        "</div>"
    );
  }
}

// // function to hide
function init() {
  initalEl.hide();
}

initSubmit.on("click", init);

<<<<<<< Updated upstream
// var requestToken = document.querySelector('#obtain-new-token')
// var userId = document.querySelector('#user-profile')
// var createPlaylist = `https://api.spotify.com/v1/users/${userId}/playlists`
// function createList (playlistname , public)
// fetch (createPlaylist)
// response = request.post(
//   createPlaylist,
//   headers = {
//     'Authorization': 'Bearer', requestToken },
//     json={
//      'name': 'name',
//       'public' : 'public',
//   }
// );

// function putPlaylist (){
// var playlist = createList( 
//   playlistname ='My Road Trip Playlist',
//   public =  false
// )
// };
// var requestToken = document.querySelector('#obtain-new-token')
// var userId = document.querySelector('#user-profile')
// var createPlaylist = `https://api.spotify.com/v1/users/${userId}/playlists`
// function createList (name , public){
// fetch (createPlaylist);
// response = request.post(
//   createPlaylist,
//   headers = {
//     'Authorization': 'Bearer', requestToken },
//     json={
//      name: 'name',
//     public : 'public',
//   }
// )};

// document.getElementById('#init-submit').addEventListener('click', weatherSearch());   
//       function weatherSearch(){
//       fetch(weatherApiCall)
//       .then (function(response){
//         console.log(response)
//               return response.json()}
//       .then (function(data){
//        for (var i=0; i<data.length; i++){
//        var currentWeather= data[i]
//         document.getElementById('#weather-forecast').innerHTML = currentWeather
//                          }
//               })
//           )};  


=======
function renderCurrentForcast(weather, city, timeZone) {
  var { temperature, humidity, uvIndex } = weather;
  console.log(temperature.humidity, uvIndex);
}

var weatherSearch = function () {
  fetch(weatherApiCall).then(
    function (response) {
      return response.json();
    }.then(function (data) {
      for (var i = 0; i < data.length; i++) {
        var currentWeather = data[i];
        document.getElementById("#weather-forecast").innerHTML = currentWeather;
      }
    })
  );
};

$("#init-submit").on("click", weatherSearch);
>>>>>>> Stashed changes
