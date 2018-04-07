var pizza = [
    {
        name: "Jiannetto's Pizza Truck",
        Location: "90 Front St, New York, NY 10043",
        Hours: "11:00am - 11:00pm",
        foods: ["Grandma's Pizza", "Chicken Parmigiana Hero", "Meatball Parmigiana Hero", "Eggplant Parmigiana Hero", "Sausage & Peppers Hero", "Sicilian Rice Ball", "Stuffed Stuff", "Baked Ziti", "Penne Vodka"],
        prices: ["$7.50", "$7.50", "$7.50", "$7.50", "$4.50", "$7.00", "$7.50", "$7.50"],
    },
    {
        name: "Neapolitan Express",
        Location: "40 Wall St, New York, NY 10260",
        Hours: "11:00am - 11:00pm",
        foods: ["Bianca", "Margherita", "Americano", "Ma Salsiccia", "Bufala D.O.P.", "A Diavolo", "Di Parma D.O.P.", "Tartufo", "Truffles i Artichokes", "Toro di Wall Street"],
        prices: ["$8.00", "$9.00", "$10.00", "$11.00", "$11.00", "$13.00", "$15.00", "$15.00", "$15.00", "$50.00"],
    },
    {
        name: "99 Cent Fresh Pizza",
        Location: "1723 Broadway New York, NY 10019",
        Hours: "11:00am - 11:00pm",
        foods: ["10' Small Cheese", "14' Large Cheese", "12' Meduim Cheese", "16' Jumbo Cheese", "16' Pepperoni Pizza"],
        prices: ["$4.95","$7.99", "$9.99", "$11.99", "$12.00"],
    },
    {
        name: "B-Side Pizza ",
        Location: "370 W 51st St, New York, NY 10019",
        foods: ["Plain Pizza", "Pepperoni Pizza", "Pizza Margherita", "Italian Cowboy Pizza", "Sasuage Pizza"],
        prices: ["$7.00", "$8.50", "$9.50", "$10.00", "$8.50"],
    },
    {
        name: "Frankie Boy's Pizza",
        Location: "1367 Broadway New York, NY 10018",
        Hours: "11:00am - 11:00pm",
        foods: ["Plain Pizza", "Ham & Pineapple Pizza", "Chicken Caesar Salad Pizza", "Sicilian Grandma Pizza", "Baked Ziti Pizza"],
        prices: ["$8.00", "$10.00", "$10.50", "$11.00", "$12.00"],
    }

];

var hotdogs = [
    {
        name: "Hot Dog Cart At South End Ave",
        Location: "331 South End Ave New York, NY 10280",
        Hours: "11:00am - 11:00pm",
        foods: ["Hot Dog", "1 Hot Dog, 1 Chips & 1 Drink", "2 Hot Dogs, 1 Chips & 1 Drink ",],
        prices: ["$2.00", "$3.00", "$4.50"] ,
    },
    {
        name: "Billy's Hot Dog Cart",
        Location: "93rd St & Central Park W New York, NY 10025",
        Hours: "11:00am - 11:00pm",
        foods: ["Plain Dog", "Franks and Beans", "Chilean", "Au Justin", "Home Dog", "Steak House"],
        prices: ["$3.00","$5.50", "$4.50", "$5.50", "$3.50", "$5.50"],
    },
    {
        name: "New York Hot Dogs",
        Location: "1000 Fifth Ave New York, NY 10028",
        Hours: "11:00am - 11:00pm",
        foods: ["Hot Dog", "Dirty Dog", "Da Club Dog", "Carolina Dog", "New Yorker"],
        prices: ["$3.00", "$4.50", "$4.50", "$5.50", "$3.50"],
    },
    {
        name: "Sabrett Hot Dog Street Cart",
        Location: "Corner of 6th Ave & 55th st New York, NY 10019",
        Hours: "11:00am - 11:00pm",
        foods: ["Hot Dog", "Jalapeno Popper", "La Mexican", "Trailer Park", "Texan Dog"],
        prices: ["$3.00", "$5.50", "$4.00", "$4.00", "$5.50"],
    },
    {
        name: "Hot Dog Cart",
        Location: "West 57 St New York, NY 10019",
        Hours: "11:00am - 11:00pm",
        foods: ["Hot Dog", "Reuben Dog", "Danger Dog", "Tijuana Dog", "Chilli Dog"],
        prices: ["$3.00", "$5.50", "$5.50", "$4.50", "$5.50"],
    }
];

var trucks = [
    {
        name: "Korilla BBQ",
        Location: "55th and Broadway New York, NY 10019",
        Hours: "11:00am - 11:00pm",
        foods: ["Rice Bowl Bulgogi", "Burrito Spicy Pork", "Rice Bowl Ginger Soy Chicken", "Burrito Organic Tofu", "Salad"],
        prices: ["$11.00", "$11.00", "$10.00", "$10.00", "$6.00"],
    },
    {
        name: "The Halal Guys",
        Location: "W 53rd St 6th Ave, New York, NY 10019",
        Hours: "11:00am - 11:00pm",
        foods: ["Chicken Sandwiches", "Beef Gyro", "Chicken Platter", "Beef Platter", "Falafel"],
        prices: ["$8.00", "$9.50", "$10.00", "$10.00", "$8.50"],
    },
    {
        name: "Steak Freak",
        Location: "50th st and 6th Ave New York, NY 10019",
        Hours: "11:00am - 11:00pm",
        foods: ["Steak and Fries", "Steak Salad", "Steak Burrito", "Steak Sandwich", "Steak and sweet potatoes fries"],
        prices: ["$8.00", "$9.00", "$10.00", "$10.00", "$8.00"],
    },
    {
        name: "Potato House",
        Location: "W 50th St New York, NY 10020",
        Hours: "11:00am - 11:00pm",
        foods: ["Baked Potato", "Baked Potato w/ Butter and Cheese", "Baked Potato w/ 2 toppings", "Baked Potato w/ 3 toppings", "Baked Potato w/ 2 toppings and drink"],
        prices: ["$2.00", "$4.00", "$6.00", "$8.00", "$10.00"],
    },
    {
        name: "Royal Grill Halal Food",
        Location: "44th St and 6th Ave New York, NY 10018",
        Hours: "11:00am - 11:00pm",        
        foods: ["Veggie Kati Roll", "Lamb Gryo", "Thai Sweet Chilli On Pita", "Combo Veggie Box", "Fries" ],
        prices: ["$5.99", "$4.99", "$4.99", "$5.99", "$3.00"],
    }
];

$(document).ready(function () {
    $("#locationButton").on("click", initMap)
    function initMap() {
        var nycAddress = { lat: 40.738626, lng: -73.97711 }
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 11,
            center: nycAddress
        });
        var marker = new google.maps.Marker({
            position: nycAddress,
            map: map
        });
    }
});