zomatoApi = "5a33e1ec7d6535e6ef16c81e3833e48a";
ticketmasterApi = "mGRhyVGMqSKLiGRVm4XLR9SJBSPsX0Eg";
zomatoURL = "https://developers.zomato.com/api/v2.1/cities?q=Orlando";
breweryURL = "https://api.openbrewerydb.org/breweries?by_city=san_diego";

const breweryHead = $("#breweryHeader");
const restHead = $("#restHeader");
const eventHead = $("#eventsHeader");

apiKeyForGeoLocation = "AIzaSyAU4mTG06oLKb7u5RYEjQrxfmHbiY49epQ";


$(document).ready(function () {


    var searchBtn = $("#search-button");
    var searchForm = $('#searchForm');
    var searchButton = $('#searchBtn');




    searchBtn.on("click", function (event) {
        event.preventDefault();
        searchForm.hide();
        searchButton.show();


        var startDate = $("#start-date").val();
        // console.log(startDate);
        var endDate = $("#end-date").val();
        // console.log(endDate);

        var citySearch = $("#city-search").val().trim();
        if (!citySearch) return;
        $("#city-search").val("");
        breweryHead.show();
        restHead.show();
        eventHead.show();
        

        // if(navigator.geolocation)
        // navigator.geolocation.getCurrentPosition(function(position){
        //     console.log(position);
        //     $.get("https://maps.googleapis.com/maps/api/geocode/json?latlng=" + position.coords.latitude + " ," + position.coords.longitude, + apiKeyForGeoLocation, function(data){
        //         console.log(data);
                
        //     })
            
            

        // })

        var breweryURL = "https://api.openbrewerydb.org/breweries?by_city=" + citySearch;
        var zomatoCityID = "https://developers.zomato.com/api/v2.1/cities?q=" + citySearch;



        //BREWERYAPI
        $.ajax({
            url: breweryURL,
            method: 'GET'
        })
            .then(function (res) {
                // console.log(res);
                
                $(".brew-display").empty();
                for (var i = 0; i < res.length; i++) {
                    var newBrewDiv = $("<div>").addClass("brew-card card");
                    var brewNameP = $("<h5>").text(res[i].name);
                    var brewTypeP = $("<p>").text("BREWERY TYPE: " + res[i].brewery_type);
                    var brewAddressP = $("<a>").attr("href","https://map.google.com/maps?q=" + res[i].street + res[i].city + res[i].state + res[i].postal_code).attr("target","_blank").text(res[i].street);
                    var brewCityP = $("<p>").text(res[i].city);
                    var brewStateP = $("<p>").text(res[i].state);
                    var brewPostalP = $("<p>").text(res[i].postal_code);
                    var brewPhoneP = $("<a>").attr("href", "tel:" + res[i].phone).text("Phone: " +  res[i].phone);
                    var brewWebP = $("<a>").attr("href", res[i].website_url).attr("target", "_blank").text("Visit Website");

                    newBrewDiv.append(brewNameP, brewTypeP, brewAddressP, brewCityP,brewStateP,brewPostalP, brewPhoneP, brewWebP)
                    $(".brew-display").append(newBrewDiv);
    }


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
        // console.log("city id " + res.location_suggestions[0].id)
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
                var restList = res.restaurants;
                console.log(restList);
                $(".rest-display").empty();

                for (var i = 0; i < restList.length; i++) {

                    var newRestDiv = $("<div>").addClass("rest-card card");

                    var restImg = $("<img>").attr("src", restList[i].restaurant.featured_image).attr("height", 150).attr("width", 200);
                    var restNameP = $("<h5>").text(restList[i].restaurant.name);
                    var restCuisineP = $("<p>").text(restList[i].restaurant.cuisines);
                    var restAddressP = $("<a>").attr("href", "https://map.google.com/maps?q=" + restList[i].restaurant.location.address).text(restList[i].restaurant.location.address);
                    var restLocality = $("<p>").text("Locality: " + restList[i].restaurant.location.locality);
                    var restPhoneP = $("<a>").attr("href", "tel:" + restList[i].restaurant.phone_numbers).text("Phone: " + restList[i].restaurant.phone_numbers);
                    var restMenu = $("<a>").attr("href", restList[i].restaurant.menu_url).attr("target", "_blank").text("View Menu");
                    newRestDiv.append(restImg, restNameP, restCuisineP, restAddressP, restLocality, restPhoneP, restMenu);
                    $(".rest-display").append(newRestDiv);

                }


            });

        });


        // TICKETMASTER Event Search
        $.ajax({
            type: "GET",
            url: "https://app.ticketmaster.com/discovery/v2/events.json?size=30&apikey=mGRhyVGMqSKLiGRVm4XLR9SJBSPsX0Eg&city=" + citySearch + "&startDateTime=" + startDate + "T12:00:59Z"+ "&endDateTime=" + endDate + "T11:59:59Z&sort=date,asc",
            async: true,
            dataType: "json",
            success: function (json) {
                // console.log(json);
                // console.log(json._embedded.events[0]
                var events = json._embedded.events

                // console.log(events[0].name)
                // console.log(events[0].dates.start.localDate)
                // console.log(events[0].dates.start.localTime)
                // console.log(events[0]._embedded.venues[0].name)
                // console.log(events[0].images[0].url)
                // console.log(events[0].url)

                $(".event-display").empty();
                for (var i = 0; i < events.length; i++) {

                    var newEventDiv = $("<div>").addClass("event-card card");

                    var eventImg = $("<img>").attr("src", events[i].images[0].url).attr("height", 150).attr("width", 250);
                    var eventName = $("<h5>").text(events[i].name);
                    var eventDateTime = $("<p>").text("Date: " + events[i].dates.start.localDate + " Time: " + (events[0].dates.start.localTime));
                    var eventVenue = $("<a>").attr("href", "https://map.google.com/maps?q=" + events[0].dates.start.localTime).text("Event Venue: " + events[i]._embedded.venues[0].name);
                    var eventUrl = $("<a>").attr("href", events[i].url).attr("target", "_blank").text("Purchase Tickets");

                    newEventDiv.append(eventImg, eventName, eventDateTime, eventVenue, eventUrl);
                    $(".event-display").append(newEventDiv);

                }

            },
            error: function (xhr, status, err) {
                // This time, we do not end up here!
            }




        });
    });




//       //Ticketmaster Attraction Search
//       $.ajax({
//         type:"GET",
//         url:"https://app.ticketmaster.com/discovery/v2/attractions.json?apikey=mGRhyVGMqSKLiGRVm4XLR9SJBSPsX0Eg&keyword=" + citySearch,
//         async:true,
//         dataType: "json",
//         success: function(json) {
//                     console.log(json);
//                     // Parse the response.
//                     // Do other things.
//                  },
//         error: function(xhr, status, err) {
//                     // This time, we do not end up here!
//                  }
//       });


});
