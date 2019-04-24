const baseUrl = "https://data.nashville.gov/resource/74d7-b74t.json?"
const apiKey = "&$$app_token=DtbMhEmsyxvhf7btQOLNuiLvN"

//add event listener to save button



// make a function that identifies checked features from menu and creates a string from features using push to go into fetch URL. need an array to hold multiple checked features.
// findParkFeatures = function () {
//     let URLfeatureString = [];
//     let parkFeature = document.querySelectorAll(".parkFeature")
//     parkFeature.forEach(feature => {
//         if (feature.checked === true) {
//             URLfeatureString.push(`${feature.id}=Yes`)
//         }
//     });
// }

saveParkToIten = () => {
    console.log("this should be saved to itenerary")
    //Code goes here to save to itenerary
}

findParkFeatures = () => {
    let searchResultsDiv = document.querySelector("#displayParksResults")

    if (displayParksResults.innerHTML !== "") {
        displayParksResults.innerHTML = ""
    }

    let parksList = document.createElement("ul")
    searchResultsDiv.appendChild(parksList)

    let feature = document.querySelector("#parks-search").value
    feature = `${feature}=Yes`

    fetch(`${baseUrl}${feature}${apiKey}`)
        .then(response => response.json())
        .then(parksArray => parksArray.forEach(parkObject => {
            // console.log(`${park.park_name} ${park.mapped_location.human_address}`)
            let parkResult = document.createElement("li")
            let saveBtn = document.createElement("button")
            saveBtn.innerHTML = "Save"
            saveBtn.setAttribute("id", `${parkObject.park_name}`)
            saveBtn.addEventListener("click", saveParkToIten)
            parkResult.innerHTML = `<h3>${parkObject.park_name}</h3>`
            parkResult.appendChild(saveBtn)

            parksList.appendChild(parkResult)
        })
        )

}


document.querySelector("#parksSearchBtn").addEventListener("click", findParkFeatures)



// add the strings together and fetch
// filters = URLfeatureString.join(" & ");
// let searchParks = baseUrl.concat(filters).concat(apiKey)


// fetch(`${seachParks}`)
//     .then(thoseParks => parks.json())
//     .then(parsedParks => {
//         let matchingParks = document.querySelector("#matchingParks")
//         if (matchingParks.hasChildNodes()) {
//             matchingParks.innerHTML = "";
//         }
//         if (parsedParks.length === 0) {
//             matchingParks.innerHTML = `
//             <div id="noMatchingParks" class="noMatchingParks">
//             No parks have each of those features.
//             </div>
//             `
//         } else {
//             parsedParks.forEach((park, i) => {
//                 let parkName = park.park_name;
//                 let Address = `${park.mapped_location_adress}`;
//                 matchingParks.innerHTML += `
//                 <article id="${parkName}" class="matchingPark'>
//                 <h3 id="${parkName}-header" class="matching ParkHeader">${parkName}</h3>
//                 <div id="${parkName}-address" class="matchingParkAddress"</div>
//                 <button id="save-${parkName}" class="parkSaveBtn">
//                 Save it!
//                 </button>
//                 </article>
//                 `
//             })
//         }

//     })