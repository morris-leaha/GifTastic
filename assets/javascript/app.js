// DISPLAY STARTING BUTTONS 
    // create an initial array (store as var topics = ...)
    var topics = ["Alexander McQueen", "Chanel", "Dior", "Marc Jacobs", "Prada", "Louis Vuitton", "Gucci"];
    
    // create a function to display starting fashion designer buttons
    function createBtn() {
        // create a for loop to go through all the values of the array
        for (var i = 0; i < topics.length; i++) {

            // create a button for each array value
            var newBtn = $("<button>");
            newBtn.addClass("btn btn-secondary")
            newBtn.attr("data-name", topics[i]);
            newBtn.text(topics[i]);

            // display buttons to page 
            $("#displayed-btns").append(newBtn);
        }
    }

    createBtn();

// WHEN BUTTON IS CLICKED, RUN FXN TO GET INFORMATION FROM API & DISPLAY IT
    
    // add event listener for when ANY button is clicked to run the function that GETS information from GIPHY API & DISPLAYS:
    $(document).on("click", ".btn", displayGIFs);
    
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
            // console.log the "response" as an object
            var data = response.data;
            console.log(data);

            // loop through the returned 10 arrays of data returned from AJAX call
                for (var i = 0; i < data.length; i++) {
                    // create div to hold each gif 
                        var GIPHYDiv = $("<div>");
                    
                    // store the response.RATING path in a variable
                        var rating = data[i].rating.toUpperCase();

                    // create div for rating
                        var rateDiv = $("<div>").text("Rating: " + rating);

                    // create img div for gifs
                        var gifImgDiv = $("<img>");   

                    // add src path to still imgs
                        gifImgDiv.attr("src", data[i].images.fixed_width_still.url);
                    
                    // display the 10 random STATIC gifs to page            
                        GIPHYDiv.append(gifImgDiv);
                    
                    // display the rating to the page (under the gif)
                        GIPHYDiv.append(rateDiv);   
                        
                    // prepend GIPHYDivs 
                        $("#gifs").prepend(GIPHYDiv);
                }
        });
    }

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