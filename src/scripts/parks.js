const baseUrl = "https://data.nashville.gov/resource/74d7-b74t.json?"
const apiKey = "&$$app_token=DtbMhEmsyxvhf7btQOLNuiLvN"


// make a function that identifies checked features from menu and creates a string from features using push to go into fetch URL. need an array to hold multiple checked features.
findParkFeatures = function () {
    let URLfeatureString = [];
    let parkFeature = document.querySelectorAll(".parkFeature")
    parkFeature.forEach(feature => {
        if (feature.checked === true) {
            URLfeatureString.push(`${feature.id}=Yes`)
        }
    });
}
// add the strings together and fetch
filters = URLfeatureString.join(" & ");
let searchParks = basUrl.concay(filters).concat(apiKey)


