// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
  $(".change-sleep").on("click", function (event) {
    var id = $(this).data("id");
    var newSleep = $(this).data("newsleep");

    var newSleepState = {
      sleepy: newSleep
    };

    // Send the PUT request.
    $.ajax("/api/trucks/" + id, {
      type: "PUT",
      data: newSleepState
    }).then(
      function () {
        console.log("changed sleep to", newSleep);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newUser = {
      company: $("#companyName").val().trim(),
      foodtype: $("#dropdown1").val().trim(),
      name: $("name").val().trim(),
      phone: $("phone").val().trim(),
    }

    // Send the POST request.
    $.ajax("/api/user", {
      type: "POST",
      data: newUser
    }).then(
      function () {
        console.log(data);
        console.log("created new truck");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
