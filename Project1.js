$(document).ready(function () {

    // -------------------THIS IS JUST THE 'READ MORE' OPTION--------------------------------------------//

    $(function () { /* to make sure the script runs after page load */

        $('.item').each(function (event) { /* select all divs with the item class */

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

        });
        //---------------------------------------------------------------------------------------------------//

    });


    $("#test").hide();
    hideResults();
    function hideResults() {
        $(".results").hide();

    }
    function showResults() {
        var number = 0

        if (number === 0) {
            $(".results").show();
        }
    }
    $("#submitButton").on("click", showResults)

    $("#locationButton").on("click", initMap)
    function initMap() {
        var nycAddress = { lat: 40.738626, lng: -73.97711 }
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 13,
            center: nycAddress
        });
        var marker = new google.maps.Marker({
            position: nycAddress,
            map: map
        });
    }
});