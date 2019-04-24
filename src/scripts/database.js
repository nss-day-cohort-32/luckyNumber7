const data = {
queryEvents(variable_name) {
    fetch(`https://www.eventbriteapi.com/v3/events/search/?location.latitude=36.174465&location.longitude=-86.767960&q=${variable_name}&token=2BDDGL3KGZR3QEHEIKWY`, {
        headers: {
            "Authorization": "Bearer 2BDDGL3KGZR3QEHEIKWY"
        }
    })
        .then(response => response.json())
        .then(event => {
            let eventArray = event.events;
            eventArray.forEach(eventIt => {
                let venueName = eventIt.name.html
                let venueID = eventIt.venue_id;
                // Now fetching venue info, in order to access the address
                fetch(`https://www.eventbriteapi.com/v3/venues/${venueID}/?token=2BDDGL3KGZR3QEHEIKWY`, {
                    headers: {
                        "Authorization": "Bearer 2BDDGL3KGZR3QEHEIKWY"
                    }
                    })
                    .then(venues => venues.json())
                    .then(parsedVenues => {
                        // Grabs venue address:
                        let venueAddress = parsedVenues.address.address_1;
                        // Line below uses 3 arguments passed through resultsBuilder, which is then passed through appendResultsInput
                        domComponents.appendResultsInput(resultsBuilder(venueName, venueAddress, "meet"));
                        // Line below is a function declared in eventlistener.js | Used to apply eventlisteners to every save button
                        clickSave();
                    })
                },
            )})}}