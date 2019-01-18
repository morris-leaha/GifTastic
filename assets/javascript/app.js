$(document).on("click", ".topicBtn", displayGIFs);
$(document).on("click", ".ind-gif", animateGIFs);

// DISPLAY STARTING BUTTONS 
// initial array (store as var topics = ...)
var topics = ["Toy Story", "WALL-E", "Finding Nemo", "Minions", "Despicable Me", "The Lion King", "Ratatouille"];

// create a function to display starting buttons
function createBtn() {
    $("#displayed-btns").empty();
    // create a for loop to go through all the values of the array
    for (var i = 0; i < topics.length; i++) {

        // create a button for each array value
        var newBtn = $("<button>");
        newBtn.addClass("btn btn-secondary topicBtn");
        newBtn.attr("data-name", topics[i]);
        newBtn.text(topics[i]);

        // display buttons to page 
        $("#displayed-btns").append(newBtn);
    }
}

createBtn();

// WHEN ANY BUTTON IS CLICKED, RUN FXN TO GET INFORMATION FROM API & DISPLAY IT
// create the function that GETS info & DISPLAYS info
function displayGIFs() {
    // get specific button value clicked and store in a variable
    var topicVal = $(this).attr("data-name");
    console.log(topicVal);
    // pass topicVal into API and store entire API URL in variable
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topicVal + "&api_key=0C11n5NgNzl0OC5zLvtsDkQ8Vv2IHwGI&limit=10";

    // make AJAX call to GIPHY API
    $.ajax({
        url: queryURL,
        method: "GET",
    }).then(function (response) {
        console.log(response);
        // store the relavent response information path (data) in a variable
        var data = response.data;
        // console.log response data information 
        console.log(data);

        // loop through the data array returned from AJAX call to create images for each of the 10 object
        for (var i = 0; i < data.length; i++) {
            // ===== DISPLAY EACH GIF: ======
            // create a div that will hold each gif image & store in variable 
            var giphyDiv = $("<div class='gif-result'>");

            // create an img for each ind gif & store in variable
            var gifImgDiv = $("<img>");

            // add the src attribute and set to url for still
            gifImgDiv.attr("src", data[i].images.fixed_width_still.url);

            // add both the STATIC and ANIMATED urls in data-attributes 
            gifImgDiv.attr("data-still", data[i].images.fixed_width_still.url);
            gifImgDiv.attr("data-animate", data[i].images.fixed_width.url);

            // add data-state attribute
            gifImgDiv.attr("data-state", "still");

            // add class
            gifImgDiv.addClass("ind-gif");

            // append individual gifs to their respective div
            giphyDiv.append(gifImgDiv);

            // ===== DISPLAY EACH RATING: ======
            // store the response rating path in a variable
            var rating = data[i].rating;

            // create rating div for each gif & store in variable 
            var rateDiv = $("<div class='rating-info'>");

            // add text to rateDiv & store in variable
            var ratingDiv = rateDiv.text("Rating: " + rating.toUpperCase());

            // display the rating to the page (under the gif)
            giphyDiv.append(ratingDiv);

            // ===== DISPLAY NEW SET OF GIFS BEFORE OLD SET: ======
            // prepend new giphyDiv's on page
            $("#gifs").prepend(giphyDiv);
        }
    });
}

// FXN FOR WHEN ANY GIF IS CLICKED:
function animateGIFs() {
    // grab values from the gif clicked & stores in variables
    var gifState = $(this).attr("data-state");
    var gifStill = $(this).attr("data-still");
    var gifAnimate = $(this).attr("data-animate");
    
    // check what the data-state of clicked gif is, then do: 
    if (gifState === "still") {
        $(this).attr("src", gifAnimate);
        $(this).attr("data-state", "animate");
    } else {
        $(this).attr("src", gifStill);
        $(this).attr("data-state", "still");
    }
}

 // ==================================OPTIONAL/EXTRA=====================================================================       

// USE VALUE FROM USER TEXT TO CREATE NEW BUTTON
// when a user types a value in text-input field:
    // when submit button is clicked, then:
        // create a function that grabs the value from text input and:
            // pushes that value into the array
                // call function that makes the button & displays on in HTML

$("button[type='submit']").on("click", function(event) {
    event.preventDefault();

    var userInput = $("#user-input-btn").val().trim();

    topics.push(userInput);
    
    createBtn();
});


