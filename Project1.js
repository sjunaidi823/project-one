$(document).ready(function () {
    // -------------------THIS IS JUST THE 'READ MORE' OPTION--------------------------------------------//
    /* to make sure the script runs after page load */
    $(".item").each(function (event) { /* select all divs with the item class */
        var max_length = 150; /* set the max content length before a read more link will be added */
        if ($(this).html().length > max_length) { /* check for content length */
            var short_content = $(this).html().substr(0, max_length); /* split the content in two parts */
            var long_content = $(this).html().substr(max_length);
            $(this).html(short_content +
                '<a href="#" class="read_more"><br/>Read More</a>' +
                '<span class="more_text" style="display:none;">' + long_content + '</span>'); /* Alter the html to allow the read more functionality */
            $(this).find('a.read_more').click(function (event) { /* find the a.read_more element within the new html and bind the following code to it */
                event.preventDefault(); /* prevent the a from changing the url */
                $(this).hide(); /* hide the read more button */
                $(this).parents('.item').find('.more_text').show(); /* show the .more_text span */
            });
        }

        //---------------------------------------------------------------------------------------------------//
    });
    var steaks = [

        {
            name: "Billy's Hot Dog Cart",
            location: "93rd St & Central Park W New York, NY 10025",
            hours: "11:00am - 11:00pm",
            foods: ["Plain Dog ($3.00)  -   Franks ($5.50)  -  and Beans ($4.50)  -  Chilean Au Justin ($5.50)  -  Home Dog ($3.50)  -  Steak House ($5.50)"],
            reviewName: "Lauren Cox",
            review: "Tasteless food, had no flavor. Wish I didn't have to waste my money.",
            coords: { lat: 40.790001, lng: -73.966092 }


        },
        {
            name: "Steak Freak",
            location: "50th st and 6th Ave New York, NY 10019",
            hours: "11:00am - 11:00pm",
            foods: ["Steak and Fries ($8.00)  -  Steak Salad ($9.00)  -  Steak Burrito ($10.00)  -  Steak Sandwich ($10.00)  -  Steak and sweet potatoes fries ($8.00)"],
            reviewName: "Nate Robinson",
            review: "I love some good cart food, it's a must to grab it while in the city. Makes you enjoy it more and this place had it right. Delicious food really gives you that New York feeling.",
            coords: { lat: 40.760128, lng: -73.980453 }
        }
    ]

    var pizzas = [

        {
            name: "Jiannetto's Pizza Truck",
            location: "90 Front St, New York, NY 10043",
            hours: "11:00am - 11:00pm",
            foods: ["Grandma's Pizza ($7.50)  -  Chicken Parmigiana Hero ($7.50)  -  Meatball Parmigiana Hero ($7.50)  -  Eggplant Parmigiana Hero ($7.50)  -  Sausage & Peppers Hero ($4.50)  -  Sicilian Rice Ball ($7.00)  -  Stuffed Stuff ($7.50)  -  Baked Ziti ($7.50)  -  Penne Vodka ($7.75)"],
            // array for reviews

            reviewName: "James Bond",
            review: "Food was quick and ready, easy for a good grab and go if you're in a hurry. Wasn't the best I've had so I would give it 3 stars at most. ",
            // rating: 3 stars
            coords: { lat: 40.705054, lng: -74.007132 }


        },
        {
            name: "Neapolitan Express",
            location: "40 Wall St, New York, NY 10260",
            hours: "11:00am - 11:00pm",
            foods: ["Bianca ($8.00)  -  Margherita ($9.00)  -  Americano ($10.00)  -  Ma Salsiccia ($11.00)  -  Bufala D.O.P. ($11.00)  -  A Diavolo ($13.00)  -  Di Parma D.O.P. ($15.00)  -  Tartufo ($15.00)  -  Truffles i Artichokes ($15.00)  -  Toro di Wall Street ($50.00)"],
            // array for reviews

            reviewName: "Lara Croft",
            review: "Tasteless food, had no flavor. Wish I didn't have to waste my money.",
            // rating: 0 stars
            coords: { lat: 40.707169, lng: -74.009675 }

        },

        {
            name: "99 Cent Fresh Pizza",
            location: "1723 Broadway New York, NY 10019",
            hours: "11:00am - 11:00pm",
            foods: ["10' Small Cheese ($4.95)  -  14' Large Cheese ($7.99)  -  12' Meduim Cheese ($9.99)  -  16' Jumbo Cheese ($11.99)  -  16' Pepperoni Pizza ($12.00)"],
            // array for reviews


            reviewName: "Nathan Drake",
            review: "I love some good cart food, it's a must to grab it while in the city. Makes you enjoy it more and this place had it right. Delicious food really gives you that New York feeling.",
            // rating: 5 stars
            coords: { lat: 40.764818, lng: -73.982533 }

        },


        {
            name: "B-Side Pizza ",
            location: "370 W 51st St, New York, NY 10019",
            foods: ["Plain Pizza ($7.00)  -  Pepperoni Pizza ($8.50)  -  Pizza Margherita ($9.50)  -  Italian Cowboy Pizza ($10.00)  -  Sasuage Pizza ($8.50)"],
            // array for reviews

            reviewName: "Spike Spiegel",
            review: "It was alright, the people that made the food were nice so I'll give it a decent review for them.",
            // rating: 3.5 stars
            coords: { lat: 40.764176, lng: -73.988226 }

        },

        {
            name: "Frankie Boy's Pizza",
            location: "1367 Broadway New York, NY 10018",
            hours: "11:00am - 11:00pm",
            foods: ["Plain Pizza ($8.00)  -  Ham & Pineapple Pizza ($10.00)  -  Chicken Caesar Salad Pizza ($10.50)  -  Sicilian Grandma Pizza ($10.00)  -  Baked Ziti Pizza ($12.00)"],
            // array for reviews

            reviewName: "Natalia Romanova",
            review: "Always in a rush so it is a quick bite to grab, not always the healthiest but still quick. Wouldn't say it is the best so I will give it a fair rating.",
            // rating: 2 stars

            coords: { lat: 40.752321, lng: -73.987877 }

        }


    ]

    var hotdogs = [
        {
            name: "Hot Dog Cart At South End Ave",
            location: "331 South End Ave New York, NY 10280",
            hours: "11:00am - 11:00pm",
            foods: ["Hot Dog ($2.00)  -  1 Hot Dog, 1 Chips & 1 Drink ($3.00)  -  2 Hot Dogs, 1 Chips & 1 Drink ($4.50)"],
            reviewName: "Timothy Hanks",
            review: "Food was quick and ready, easy for a good grab and go if you're in a hurry. Wasn't the best I've had so I would give it 3 stars at most. ",
            // rating: 3 stars
            coords: { lat: 40.711253, lng: -74.016240 }

        },
        {
            name: "Billy's Hot Dog Cart",
            location: "93rd St & Central Park W New York, NY 10025",
            hours: "11:00am - 11:00pm",
            foods: ["Plain Dog ($3.00)  -   Franks ($5.50)  -  and Beans ($4.50)  -  Chilean Au Justin ($5.50)  -  Home Dog ($3.50)  -  Steak House ($5.50)"],
            reviewName: "Lauren Cox",
            review: "Tasteless food, had no flavor. Wish I didn't have to waste my money.",
            coords: { lat: 40.790001, lng: -73.966092 }

        },
        {
            name: "New York Hot Dogs",
            location: "1000 Fifth Ave New York, NY 10028",
            hours: "11:00am - 11:00pm",
            foods: ["Hot Dog ($3.00)  -  Dirty Dog ($4.50)  -  Da Club Dog ($4.50)  -  Carolina Dog ($5.50)  -  New Yorker ($3.50)"],
            reviewName: "Jackie Chan",
            review: "I love some good cart food, it's a must to grab it while in the city. Makes you enjoy it more and this place had it right. Delicious food really gives you that New York feeling.",
            coords: { lat: 40.779393, lng: -73.962928 }

        },
        {
            name: "Sabrett Hot Dog Street Cart",
            location: "Corner of 6th Ave & 55th st New York, NY 10019",
            hours: "11:00am - 11:00pm",
            foods: ["Hot Dog ($3.00)  -  Jalapeno Popper ($5.50)  -  La Mexican ($4.00)  -  Trailer Park ($4.00)  -  Texan Dog ($5.50"],
            reviewName: "OJ Da Juice Man",
            review: "It was alright, the people that made the food were nice so I'll give it a decent review for them.",
            coords: { lat: 40.763335, lng: -73.978155 }

        },
        {
            name: "Hot Dog Cart",
            location: "West 57 St New York, NY 10019",
            hours: "11:00am - 11:00pm",
            foods: ["Hot Dog ($3.00)  -  Reuben Dog ($5.50)  -  Danger Dog ($5.50)  -  Tijuana Dog ($4.50)  -  Chilli Dog ($5.50)"],
            reviewName: "Nate Rob",
            review: "Always in a rush so it is a quick bite to grab, not always the healthiest but still quick. Wouldn't say it is the best so I will give it a fair rating.",
            coords: { lat: 40.767543, lng: -73.984165 }

        }
    ];
    var trucks = [
        {
            name: "Korilla BBQ",
            location: "55th and Broadway New York, NY 10019",
            hours: "11:00am - 11:00pm",
            foods: ["Rice Bowl Bulgogi ($11.00)  -  Burrito Spicy Pork ($11.00)  -  Rice Bowl Ginger Soy Chicken ($10.00)  -  Burrito Organic Tofu ($10.000)  -  Salad ($6.00)"],
            reviewName: "Tony Stark",
            review: "Food was quick and ready, easy for a good grab and go if you're in a hurry. Wasn't the best I've had so I would give it 3 stars at most. ",
            coords: { lat: 40.76501, lng: -73.982273 }

        },
        {
            name: "The Halal Guys",
            location: "W 53rd St 6th Ave, New York, NY 10019",
            hours: "11:00am - 11:00pm",
            foods: ["Chicken Sandwiches ($8.00)  -  Beef Gyro ($9.50)  -  Chicken Platter ($10.00)  -  Beef Platter ($10.00)  -  Falafel ($8.50)"],
            reviewName: "Lady Red",
            review: "Tasteless food, had no flavor. Wish I didn't have to waste my money.",
            coords: { lat: 40.761999, lng: -73.979018 }
        },
        {
            name: "Steak Freak",
            location: "50th st and 6th Ave New York, NY 10019",
            hours: "11:00am - 11:00pm",
            foods: ["Steak and Fries ($8.00)  -  Steak Salad ($9.00)  -  Steak Burrito ($10.00)  -  Steak Sandwich ($10.00)  -  Steak and sweet potatoes fries ($8.00)"],
            reviewName: "Nate Robinson",
            review: "I love some good cart food, it's a must to grab it while in the city. Makes you enjoy it more and this place had it right. Delicious food really gives you that New York feeling.",
            coords: { lat: 40.760128, lng: -73.980453 }

        },
        {
            name: "Potato House",
            location: "W 50th St New York, NY 10020",
            hours: "11:00am - 11:00pm",
            foods: ["Baked Potato ($2.00)  -  Baked Potato w/ Butter and Cheese ($4.00)  -  Baked Potato w/ 2 toppings ($6.00)  -  Baked Potato w/ 3 toppings ($8.00)  -  Baked Potato w/ 2 toppings and drink ($10.00)"],
            reviewName: "Nathan Drake",
            review: "I love some good cart food, it's a must to grab it while in the city. Makes you enjoy it more and this place had it right. Delicious food really gives you that New York feeling.",
            coords: { lat: 40.760419, lng: -73.981000 }

        },
        {
            name: "Royal Grill Halal Food",
            location: "44th St and 6th Ave New York, NY 10018",
            hours: "11:00am - 11:00pm",
            foods: ["Veggie Kati Roll ($5.99)  -  Lamb Gryo ($4.99)  -  Thai Sweet Chilli On Pita ($4.99)  -  Combo Veggie Box ($5.99)  -  Fries ($3.00)"],
            reviewName: "Nathan Drake",
            review: "I love some good cart food, it's a must to grab it while in the city. Makes you enjoy it more and this place had it right. Delicious food really gives you that New York feeling.",
            coords: { lat: 40.756346, lng: -73.983132 }

        }
    ];
    var panel = $("#dropDown");
    var foodName = $("#truckName");
    var address = $("#address");
    var truckHours = $("#time");
    var truckFood = $("#typesOfFood")
    var currentSearch = 0;
    $("#test").hide();
    hideResults();
    hideButton();
    function hideButton() {
        $(".gifButton1").hide();
        $(".gifButton2").hide();
        $(".gifButton3").hide();
        $(".gifButton4").hide();

    }
    function showButton1() {
        $(".gifButton1").show();
    }
    function showButton2() {
        $(".gifButton2").show();
    }
    function showButton3() {
        $(".gifButton3").show();
    }
    function showButton4() {
        $(".gifButton4").show();
    }
    function hideResults() {
        $(".results").hide();
    }
    function showResults() {
        $(".results").show();
    }

    function testing() {
        alert("IT WORKS")
    }
    var results = [hotdogs]
    // code for submit and clear buttons
    $("#submitButton").on("click", function () {
        showResults();
        // for (var j = 0; j < 4; j++) {
        //     $("#dropDown").clone().appendTo(".mainDropDown");
        // }
        var userSearch = $("#foodSearch").val().trim();

        results.push(userSearch);
        for (var i = 0; i < results.length; i++) {
            console.log(results[i]);
            if (results[i] == "pizzas") {
                pizzaInfo();
                showButton2();
            } else if (results[i] == "hotdogs") {
                hotdogInfo();
                showButton3();
            } else if (results[i] == "food trucks") {
                truckInfo();
                showButton1();
            } else if (results[i] == "steaks") {
                steakInfo();
                showButton4();
            }
        }
    });
    $("#clearButton").on("click", hideResults)


    $("#locationButton").on("click", initMap)
    function steakInfo() {


        for (var i = 0; i < hotdogs.length; i++) {

            var panel = $("<div>")

            foodName.append(name);
            var menuText1 = "-------------MENU-------------"
            var menuText2 = "--------------------------------"
            panel.append("<div class='card row' id='dropDown'>" + "<div class='card-header style1' id='truckName'>" + steaks[i].name + "</div>" + "<div class='card-body styleBox'>" + "<div id='showMap'>" + "</div>" + "<div class='rating'>" + "<span class='card-title'>" + "</span>" + "<span class='fa fa-star checked'>" + "</span>" + "<span class='fa fa-star checked'>" + "</span>" + "<span class='fa fa-star checked'>" + "</span>" + "<span class='fa fa-star unchecked'>" + "</span>" + "<span class='fa fa-star unchecked'>" + "</span>" + "</div>" + "<div>" + "<h4>" + steaks[i].reviewName + "</h4>" + steaks[i].review + "</div>" + menuText1 + "<div class='typesOfFoods'>" + steaks[i].foods + "</div>" + menuText2 + "<p id='time' class='styleBox'>" + steaks[i].hours + "</p>" + "<p id='address' class='styleBox'>" + steaks[i].location + "</p>" + "<div id='showButton'>" + "<br>" + "</div")



            $(".results").append(panel);

        }
    }
    function hotdogInfo() {


        for (var i = 0; i < hotdogs.length; i++) {

            var panel = $("<div>")

            foodName.append(name);
            var menuText1 = "-------------MENU-------------"
            var menuText2 = "--------------------------------"
            panel.append("<div class='card row' id='dropDown'>" + "<div class='card-header style1' id='truckName'>" + hotdogs[i].name + "</div>" + "<div class='card-body styleBox'>" + "<div id='showMap'>" + "</div>" + "<div class='rating'>" + "<span class='card-title'>" + "</span>" + "<span class='fa fa-star checked'>" + "</span>" + "<span class='fa fa-star checked'>" + "</span>" + "<span class='fa fa-star checked'>" + "</span>" + "<span class='fa fa-star unchecked'>" + "</span>" + "<span class='fa fa-star unchecked'>" + "</span>" + "</div>" + "<div>" + "<h4>" + hotdogs[i].reviewName + "</h4>" + hotdogs[i].review + "</div>" + menuText1 + "<div class='typesOfFoods'>" + hotdogs[i].foods + "</div>" + menuText2 + "<p id='time' class='styleBox'>" + hotdogs[i].hours + "</p>" + "<p id='address' class='styleBox'>" + hotdogs[i].location + "</p>" + "<div id='showButton'>" + "<br>" + "</div")


            // var p = $("<div>")
            // p.addClass("map");
            // $("#showMap").append(p);

            // console.log(map)
            // var a = $("<button>");
            // // Adding a class of movie-btn to our button
            // a.addClass("btn btn-primary locationButton");
            // // a.attr('id', 'locationButton');
            // // a.attr('type', 'button');
            // a.addClass("btn btn-primary");

            // // Adding a data-attribute
            // a.text("LOCATION2");
            // $("#showButton").append(a);
            // console.log(a)
            $(".results").append(panel);
            // $(".locationButton").on("click", initMap)

            // var loc = $("<p></p>").html(hotdogs[i].location);
            // address.append(loc);

            // var time = $("<p></p>").html(hotdogs[i].hours);
            // panel.append(time);
            // truckHours.append(time);



            // for (var j = 0; j < hotdogs[i].foods.length; j++) {
            //     var food = $("<p></p>").html(hotdogs[i].foods[j])
            //     panel.append(food)
            //     $("#typesOfFoods").append(food);

            // }

        }
    }

    function pizzaInfo() {
        for (var i = 0; i < pizzas.length; i++) {

            var panel = $("<div>")
            //  var name = $("<h4></h4>").html(pizzas[0].name);
            foodName.append(name);
            var menuText1 = "-------------MENU-------------"
            var menuText2 = "--------------------------------"
            panel.append("<div class='card row' id='dropDown'>" + "<div class='card-header style1' id='truckName'>" + pizzas[i].name + "</div>" + "<div class='card-body styleBox'>" + "<div class='rating'>" + "<span class='card-title'>" + "</span>" + "<span class='fa fa-star checked'>" + "</span>" + "<span class='fa fa-star checked'>" + "</span>" + "<span class='fa fa-star checked'>" + "</span>" + "<span class='fa fa-star unchecked'>" + "</span>" + "<span class='fa fa-star unchecked'>" + "</span>" + "</div>" + "<div>" + "<h4>" + pizzas[i].reviewName + "</h4>" + pizzas[i].review + "</div>" + menuText1 + "<div class='typesOfFoods'>" + pizzas[i].foods + "</div>" + menuText2 + "<p id='time' class='styleBox'>" + pizzas[i].hours + "</p>" + "<p id='address' class='styleBox'>" + pizzas[i].location + "</p>" + "<br>" + "</div")


            // $("#buttons-view").append(a);

            $(".results").append(panel);


            // var loc = $("<p></p>").html(pizzas[i].location);
            // address.append(loc);

            // var time = $("<p></p>").html(pizzas[i].hours);
            // panel.append(time);
            // truckHours.append(time);



            // for (var j = 0; j < pizzas[i].foods.length; j++) {
            //     var food = $("<p></p>").html(pizzas[i].foods[j])
            //     panel.append(food)
            //     $("#typesOfFoods").append(food);

            // }

        }

    }
    function truckInfo() {
        for (var i = 0; i < trucks.length; i++) {

            var panel = $("<div>");
            var h4 = $("#name");

            //  var name = $("<h4></h4>").html(trucks[0].name);
            var names = ["James Bond", "Lara Croft", "Nathan Drake", "Spike Spiegel", "Natalia Romanova",]
            var review = ["Food was quick and ready, easy for a good grab and go if you're in a hurry. Wasn't the best I've had so I would give it 3 stars at most. ", "Tasteless food, had no flavor. Wish I didn't have to waste my money.", "I love some good cart food, it's a must to grab it while in the city. Makes you enjoy it more and this place had it right. Delicious food really gives you that New York feeling.", "It was alright, the people that made the food were nice so I'll give it a decent review for them.", "Always in a rush so it is a quick bite to grab, not always the healthiest but still quick. Wouldn't say it is the best so I will give it a fair rating."]
            foodName.append(name);
            var menuText1 = "-------------MENU-------------"
            var menuText2 = "--------------------------------"
            panel.append("<div class='card row' id='dropDown'>" + "<div class='card-header style1' id='truckName'>" + trucks[i].name + "</div>" + "<div class='card-body styleBox'>" + "<div class='rating'>" + "<span class='card-title'>" + "</span>" + "<span class='fa fa-star checked'>" + "</span>" + "<span class='fa fa-star checked'>" + "</span>" + "<span class='fa fa-star checked'>" + "</span>" + "<span class='fa fa-star unchecked'>" + "</span>" + "<span class='fa fa-star unchecked'>" + "</span>" + "</div>" + "<div>" + "<h4>" + trucks[i].reviewName + "</h4>" + trucks[i].review + "</div>" + menuText1 + "<div class='typesOfFoods'>" + trucks[i].foods + "</div>" + menuText2 + "<p id='time' class='styleBox'>" + trucks[i].hours + "</p>" + "<p id='address' class='styleBox'>" + trucks[i].location + "</p>" + "<br>" + "</div")

            $(".results").append(panel);


            // var loc = $("<p></p>").html(trucks[i].location);
            // address.append(loc);

            // var time = $("<p></p>").html(trucks[i].hours);
            // panel.append(time);
            // truckHours.append(time);



            // for (var j = 0; j < trucks[i].foods.length; j++) {
            //     var food = $("<p></p>").html(trucks[i].foods[j])
            //     panel.append(food)
            //     $("#typesOfFoods").append(food);

            // }
        }
    }
    /// array for names and reviews
    var names = ["James Bond", "Lara Croft", "Nathan Drake", "Spike Spiegel", "Natalia Romanova",]
    var review = ["Food was quick and ready, easy for a good grab and go if you're in a hurry. Wasn't the best I've had so I would give it 3 stars at most. ", "Tasteless food, had no flavor. Wish I didn't have to waste my money.", "I love some good cart food, it's a must to grab it while in the city. Makes you enjoy it more and this place had it right. Delicious food really gives you that New York feeling.", "It was alright, the people that made the food were nice so I'll give it a decent review for them.", "Always in a rush so it is a quick bite to grab, not always the healthiest but still quick. Wouldn't say it is the best so I will give it a fair rating."]
    var rand = Math.floor(Math.random() * names.length);
    var rand2 = Math.floor(Math.random() * review.length);
    function showquote() {
        document.getElementById("name").innerHTML = names[rand];
        document.getElementById("review").innerHTML = review[rand2];

    }
    showquote();


    // for (i = 0; i < reviews.length; i++) {
    //     $(".item").appendTo("<h5>");
    // }

    $(".rating").hover(
        // Handles the mouseover
        function () {
            $(this).prevAll().andSelf().addClass("ratings_over");
            $(this).nextAll().removeClass("ratings_vote");
        },
        // Handles the mouseout
        function () {
            $(this).prevAll().andSelf().removeClass("ratings_over");
            set_votes($(this).parent());
        }
    );

    $("#locationButton").on("click", initMap)

    // function initialize(condition) {
    //     // create the maps
    //     var myOptions = {
    //         zoom: 14,
    //         center: new google.maps.LatLng(0.0, 0.0),
    //         mapTypeId: google.maps.MapTypeId.ROADMAP
    //     }
    //     map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);

    //     map2 = new google.maps.Map(document.getElementById("map_canvas2"), myOptions);
    // }
    function initMap() {

        var counter = 1;

        // this an options variable that wwe can edit as needed it stores zoom and centers coordinates
        var options = {
            zoom: 11,
            // center of  NYC
            center: { lat: 40.7128, lng: -74.0060 }
        }



        // this is variable that calls and places the map on the page with options variable
        var map = new google.maps.Map(document.getElementById('map'), options);

        // an array of markers
        var pizzamarkers = [
            {
                //"Jiannetto's Pizza Truck",

                coords: { lat: 40.705054, lng: -74.007132 },
                imageIcon: 'truck.png'
            },

            {
                //"Neapolitan Express"
                coords: { lat: 40.707169, lng: -74.009675 },
                imageIcon: 'truck.png'
            },

            {
                //"99 Cent Fresh Pizza"
                coords: { lat: 40.764818, lng: -73.982533 },
                imageIcon: 'truck.png'
            },
            {
                //"B-Side Pizza"
                coords: { lat: 40.764176, lng: -73.988226 },
                imageIcon: 'truck.png'
            },
            {
                //"Frankie Boy's Pizza"
                coords: { lat: 40.752321, lng: -73.987877 },
                imageIcon: 'truck.png'
            },
        ];
        var hotdogmarkers = [
            {
                //"Hot Dog Cart At South End Ave"
                coords: { lat: 40.711253, lng: -74.016240 },
                imageIcon: 'truck.png'
            },

            {
                //"Billy's Hot Dog Cart"
                coords: { lat: 40.790001, lng: -73.966092 },
                imageIcon: 'truck.png',
                // content: '<h1>Hello</h1>'
            },

            {
                //"New York Hot Dogs"
                coords: { lat: 40.779393, lng: -73.962928 },
                imageIcon: 'truck.png'
            },
            {
                //"Sabrett Hot Dog Street Cart"
                coords: { lat: 40.763335, lng: -73.978155 },
                imageIcon: 'truck.png'
            },
            {
                //"Hot Dog Cart"
                coords: { lat: 40.763335, lng: -73.978155 },
                imageIcon: 'truck.png'
            },

        ];
        var steakmarkers = [
            {
                //"Billy's Hot Dog Cart"
                coords: { lat: 40.790001, lng: -73.966092 },
                imageIcon: 'truck.png'
            },

            {
                //"Steak Freak"
                coords: { lat: 40.760128, lng: -73.980453 },
                imageIcon: 'truck.png',
            },
        ]
        var truckmarkers = [
            {
                //"Korilla BBQ"
                coords: { lat: 40.76501, lng: -73.982273 },
                imageIcon: 'truck.png'
            },

            {
                //"The Halal Guys"
                coords: { lat: 40.761999, lng: -73.979018 },
                imageIcon: 'truck.png',
                content: '<h1>Hello</h1>'
            },
            {
                //"Steak Freak"
                coords: { lat: 40.760128, lng: -73.980453 },
                imageIcon: 'truck.png'
            },
            {
                //"Potato House"
                coords: { lat: 40.760419, lng: -73.981000 },
                imageIcon: 'truck.png'
            },
            {
                //"Royal Grill Halal Food"
                coords: { lat: 40.756346, lng: -73.983132 },
                imageIcon: 'truck.png'
            },
        ];
        for (var i = 0; i < results.length; i++) {
            console.log(results[i]);
            if (results[i] == "pizzas") {
                for (var i = 0; i < pizzamarkers.length; i++) {
                    // adds maker for each
                    addMaker(pizzamarkers[i]);
                }
            } else if (results[i] == "hotdogs") {
                for (var i = 0; i < hotdogmarkers.length; i++) {
                    // adds maker for each
                    addMaker(hotdogmarkers[i]);
                }
            } else if (results[i] == "trucks") {
                for (var i = 0; i < truckmarkers.length; i++) {
                    // adds maker for each
                    addMaker(truckmarkers[i]);
                }

            } else if (results[i] == "steaks") {
                for (var i = 0; i < steakmarkers.length; i++) {
                    // adds maker for each
                    addMaker(steakmarkers[i]);
                }
            }
            // for loop through the array



            // add marker function

            function addMaker(props) {
                var marker = new google.maps.Marker({
                    position: props.coords,
                    map: map,
                    //icon: props.imageIcon
                });

                // checks for custom Icon
                if (props.imageIcon) {
                    //sets the icon
                    marker.setIcon(props.imageIcon);
                };
                // checks if there is content and if so displays it
                //once clicked
                // if (props.content) {
                //   var infoWindow = new google.maps.infoWindow({
                //     content: props.content
                //   });
                // }

                // marker.addListener("mouseover", function () {
                //   infoWindow.open(map, maker);
                // });
            }
        }
    }
    // constructing a queryURL variable we will use instead of the literal string inside of the ajax method
    // var title = "space+jam";

});
// ---------------------------------------------------------
// console.log("This console.log will probably happen first because of asynchronicity.");
// var x = 2;
// var y = 10;
// var z = 13;
// console.log("We can also assign some variables and do some arithmetic while we wait too: 2 + 10 + 13 = ", x + y + z);

$(document).ready(function () {
    $(".gifButton1").on("click", function () {
        // In this case, the "this" keyword refers to the button that was clicked
        var food = $(this).attr("data-food");

        // Constructing a URL to search Giphy for the name of the person who said the quote
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
            food + "&api_key=x5Bq17XGTHVO3HVOATk486hmNuGES58Q";

        // Performing our AJAX GET request
        $.ajax({
            url: queryURL,
            method: "GET"
        })
            // After the data comes back from the API
            .then(function (response) {
                // Storing an array of results in the results variable
                var results = response.data;

                // Looping over every result item
                for (var i = 0; i < 1; i++) {

                    // Only taking action if the photo has an appropriate rating
                    //   if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
                    // Creating a div with the class "item"
                    var gifDiv = $("<div class='item mx-auto'>");

                    // // Storing the result item's rating
                    var rating = results[i].rating;

                    // // // Creating a paragraph tag with the result item's rating
                    var p = $("<p>").text();

                    // Creating an image tag
                    var foodImage = $("<img>");

                    // Giving the image tag an src attribute of a proprty pulled off the
                    // result item
                    foodImage.attr("src", results[i].images.fixed_height.url);

                    // Appending the paragraph and personImage we created to the "gifDiv" div we created
                    gifDiv.append(p);
                    gifDiv.append(foodImage);

                    // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
                    $("#gifs-appear-here").prepend(gifDiv);
                    //   }
                }
            });
    });
    $(".gifButton2").on("click", function () {
        // In this case, the "this" keyword refers to the button that was clicked
        var food = $(this).attr("data-food");

        // Constructing a URL to search Giphy for the name of the person who said the quote
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
            food + "&api_key=x5Bq17XGTHVO3HVOATk486hmNuGES58Q";

        // Performing our AJAX GET request
        $.ajax({
            url: queryURL,
            method: "GET"
        })
            // After the data comes back from the API
            .then(function (response) {
                // Storing an array of results in the results variable
                var results = response.data;

                // Looping over every result item
                for (var i = 0; i < 1; i++) {

                    // Only taking action if the photo has an appropriate rating
                    //   if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
                    // Creating a div with the class "item"
                    var gifDiv = $("<div class='item mx-auto'>");

                    // // Storing the result item's rating
                    var rating = results[i].rating;

                    // // // Creating a paragraph tag with the result item's rating
                    var p = $("<p>").text();

                    // Creating an image tag
                    var foodImage = $("<img>");

                    // Giving the image tag an src attribute of a proprty pulled off the
                    // result item
                    foodImage.attr("src", results[i].images.fixed_height.url);

                    // Appending the paragraph and personImage we created to the "gifDiv" div we created
                    gifDiv.append(p);
                    gifDiv.append(foodImage);

                    // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
                    $("#gifs-appear-here").prepend(gifDiv);
                    //   }
                }
            });
    });
    $(".gifButton3").on("click", function () {
        // In this case, the "this" keyword refers to the button that was clicked
        var food = $(this).attr("data-food");

        // Constructing a URL to search Giphy for the name of the person who said the quote
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
            food + "&api_key=x5Bq17XGTHVO3HVOATk486hmNuGES58Q";

        // Performing our AJAX GET request
        $.ajax({
            url: queryURL,
            method: "GET"
        })
            // After the data comes back from the API
            .then(function (response) {
                // Storing an array of results in the results variable
                var results = response.data;

                // Looping over every result item
                for (var i = 0; i < 1; i++) {

                    // Only taking action if the photo has an appropriate rating
                    //   if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
                    // Creating a div with the class "item"
                    var gifDiv = $("<div class='item mx-auto'>");

                    // // Storing the result item's rating
                    var rating = results[i].rating;

                    // // // Creating a paragraph tag with the result item's rating
                    var p = $("<p>").text();

                    // Creating an image tag
                    var foodImage = $("<img>");

                    // Giving the image tag an src attribute of a proprty pulled off the
                    // result item
                    foodImage.attr("src", results[i].images.fixed_height.url);

                    // Appending the paragraph and personImage we created to the "gifDiv" div we created
                    gifDiv.append(p);
                    gifDiv.append(foodImage);

                    // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
                    $("#gifs-appear-here").prepend(gifDiv);
                    //   }
                }
            });
    });
    $(".gifButton4").on("click", function () {
        // In this case, the "this" keyword refers to the button that was clicked
        var food = $(this).attr("data-food");

        // Constructing a URL to search Giphy for the name of the person who said the quote
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
            food + "&api_key=x5Bq17XGTHVO3HVOATk486hmNuGES58Q";

        // Performing our AJAX GET request
        $.ajax({
            url: queryURL,
            method: "GET"
        })
            // After the data comes back from the API
            .then(function (response) {
                // Storing an array of results in the results variable
                var results = response.data;

                // Looping over every result item
                for (var i = 0; i < 1; i++) {

                    // Only taking action if the photo has an appropriate rating
                    //   if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
                    // Creating a div with the class "item"
                    var gifDiv = $("<div class='item mx-auto'>");

                    // // Storing the result item's rating
                    var rating = results[i].rating;

                    // // // Creating a paragraph tag with the result item's rating
                    var p = $("<p>").text();

                    // Creating an image tag
                    var foodImage = $("<img>");

                    // Giving the image tag an src attribute of a proprty pulled off the
                    // result item
                    foodImage.attr("src", results[i].images.fixed_height.url);

                    // Appending the paragraph and personImage we created to the "gifDiv" div we created
                    gifDiv.append(p);
                    gifDiv.append(foodImage);

                    // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
                    $("#gifs-appear-here").prepend(gifDiv);
                    //   }
                }
            });
    });
});