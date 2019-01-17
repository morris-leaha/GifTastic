// DISPLAY STARTING BUTTONS 
// create a function to display starting fashion designer buttons
    // create an initial array (store as var topics = ...)
    var topics = ["Alexander McQueen", "Chanel", "Dior", "Marc Jacobs", "Prada", "Louis Vuitton", "Gucci"];
    // create a for loop to go through all the values of the array
        // create a button for each array value
        // display buttons to page 

// WHEN BUTTON IS CLICKED, RUN FXN TO GET INFORMATION FROM API & DISPLAY IT
// when a fashion designer button is clicked, create a function that GETS information from GIPHY API:
    // make AJAX call to GIPHY API
    var queryURL = "https://api.giphy.com/v1/gifs/search?" + designers + "&api_key=0C11n5NgNzl0OC5zLvtsDkQ8Vv2IHwGI&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET",
    }).then(function(response) {
       // console.log the "response" as an object
        console.log(response);
        // store the response.STATIC path in a variable
            // display the 10 random STATIC gifs to page
        // store the response.RATING path in a variable
            // display the rating to the page (under the gif)
        // store the response.ANIMATED path in a variable
    });

// FXNS FOR WHEN THE GIF IS CLICKED:
    // when the gif is clicked (odd number of times):
        // create a function that:
            // displays the animated gif to the page

    // when the gif is clicked again (even number of times):
        // create a function that:
            // displays the static gif
            
            

 // ==================================OPTIONAL/EXTRA=====================================================================       
            
// USE VALUE FROM USER TEXT TO CREATE NEW BUTTON
// when a user types a value in text-input field:
    // when submit button is clicked, then:
        // create a function that grabs the value from text input and:
            // pushes that value into the array
                // call function that makes the button & displays on in HTML


// Create the AJAX call
$.ajax({
    url: queryURL,
    method: "GET",
}).then(function (response) {
    console.log(response);
});
    