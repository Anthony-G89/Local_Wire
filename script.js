zomatoApi = "5a33e1ec7d6535e6ef16c81e3833e48a";
ticketmasterApi = "mGRhyVGMqSKLiGRVm4XLR9SJBSPsX0Eg";

zomatoURL = "https://developers.zomato.com/api/v2.1/cities?q=Orlando"

breweryURL = "https://api.openbrewerydb.org/breweries?by_city=san_diego"

var searchBtn = $("#search-button");


searchBtn.on("click", function (event) {
    event.preventDefault();

    var citySearch = $("#city-search").val().trim();
    if (!citySearch) return;
    $("#city-search").val("");

    var breweryURL = "https://api.openbrewerydb.org/breweries?by_city=" + citySearch;
    var zomatoCityID = "https://developers.zomato.com/api/v2.1/cities?q=" + citySearch;

    //BREWERYAPI
    $.ajax({
        url: breweryURL,
        method: 'GET'
    })
        .then(function (res) {
            //EMPTY DIV here $(".appendingDiv").empty(); //

            console.log(res);
        });


//GET's CITYID
    $.ajax({
        url: zomatoCityID,
        method: "GET",
        headers: {
            "Accept": "application/json",
            "user-key": "5a33e1ec7d6535e6ef16c81e3833e48a"
        }
    }).then(function (res) {
        console.log("city id " + res.location_suggestions[0].id)
        var cityID = res.location_suggestions[0].id;

        var zomatoListURL = "https://developers.zomato.com/api/v2.1/search?entity_id=" + cityID + "&entity_type=city";

//REST LIST by City ID
        $.ajax({
            url: zomatoListURL,
            method: "GET",
            headers: {
                "Accept": "application/json",
                "user-key": "5a33e1ec7d6535e6ef16c81e3833e48a"
            }
        }).then(function (res) {
            console.log(res);
        });

    });

// TICKETMASTER Event Search
    $.ajax({
        type:"GET",
        url:"https://app.ticketmaster.com/discovery/v2/events.json?size=1&apikey=mGRhyVGMqSKLiGRVm4XLR9SJBSPsX0Eg&city=" + citySearch,
        async:true,
        dataType: "json",
        success: function(json) {
                    console.log(json);
                    // Parse the response.
                    // Do other things.
                 },
        error: function(xhr, status, err) {
                    // This time, we do not end up here!
                 }
      });

      //Ticketmaster Attraction Search
      $.ajax({
        type:"GET",
        url:"https://app.ticketmaster.com/discovery/v2/attractions.json?apikey=mGRhyVGMqSKLiGRVm4XLR9SJBSPsX0Eg&keyword=" + citySearch,
        async:true,
        dataType: "json",
        success: function(json) {
                    console.log(json);
                    // Parse the response.
                    // Do other things.
                 },
        error: function(xhr, status, err) {
                    // This time, we do not end up here!
                 }
      });


});