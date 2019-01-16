// initial array of fashion designers 
var designers = ["Alexander McQueen", "Chanel", "Dior", "Marc Jacobs", "Prada", "Louis Vuitton", "Gucci"];

// store API URL and my API key to search within GIPHY
var queryURL = "https://api.giphy.com/v1/gifs/search?" + designers + "&api_key=0C11n5NgNzl0OC5zLvtsDkQ8Vv2IHwGI&limit=10";

// Create the AJAX call
$.ajax({
    url: queryURL,
    method: "GET",
}).then(function (response) {
    console.log(response);
});


// create a function to make buttons with initial array of fashion designers
    // empty buttons prior to user adding new buttons
    // loop through designers array to create initial buttons
    // display initial array of fashion designer buttons when page loads
    
// create an event listener function when user clicks "add" button 
    // utilize .preventDefault() method on event 
    // grab value from text input
    // push value into array
    // call function to create button
    