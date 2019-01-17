// DISPLAY STARTING BUTTONS 
    // create an initial array (store as var topics = ...)
    var topics = ["Toy Story", "WALL-E", "Finding Nemo", "Minions", "Despicable Me", "The Lion King", "Ratatouille"];
    
    // create a function to display starting buttons
    function createBtn() {
        // create a for loop to go through all the values of the array
        for (var i = 0; i < topics.length; i++) {

            // create a button for each array value
            var newBtn = $("<button>");
            newBtn.addClass("btn btn-secondary");
            newBtn.attr("data-name", topics[i]);
            newBtn.text(topics[i]);

            // display buttons to page 
            $("#displayed-btns").append(newBtn);
        }
    }

    createBtn();

// WHEN BUTTON IS CLICKED, RUN FXN TO GET INFORMATION FROM API & DISPLAY IT
    
    // add event listener for when ANY button is clicked to run the function that GETS information from GIPHY API & DISPLAYS:
    
    window.onload = function() {
        $(".btn").on("click", displayGIFs);
        $("<img>").on("click", animateGIFs);
    }
    
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
        }).then(function(response) {
            console.log(response);
            // store the relavent response information path (data) in a variable
            var data = response.data;
            // console.log response data information 
            console.log(data); 

            // loop through the data array returned from AJAX call to create images for each of the 10 object
                for (var i = 0; i < data.length; i++) {
                    // ===== DISPLAY EACH GIF: ======
                    // create a div that will hold all 10 gifs per button value clicked & store in variable 
                        var giphyDiv = $("<div class='all-gifs'>");
                    
                    // create an img div for each ind gif & store in variable
                        var gifImgDiv = $("<img class='each-gif'>");   

                    // add the src attribute and set to url for still
                        gifImgDiv.attr("src", data[i].images.fixed_width_still.url);
                    
                    // add both the STATIC and ANIMATED urls in data-attributes 
                        gifImgDiv.attr("data-still", data[i].images.fixed_width_still.url);
                        gifImgDiv.attr("data-animate", data[i].images.fixed_width.url);

                    // add data-state attribute
                        gifImgDiv.attr("data-state", "still");
                    
                    // display the 10 random STATIC gifs to page            
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

// FXNS FOR WHEN THE GIF IS CLICKED:
    function animateGIFs () {

    }
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