const baseUrl = "https://data.nashville.gov/resource/74d7-b74t.json?"
const apiKey = "&$$app_token=DtbMhEmsyxvhf7btQOLNuiLvN"


findParkFeatures = () => {
    let searchResultsDiv = document.querySelector("#displayParksResults")

    if (displayParksResults.innerHTML !== "") {
        displayParksResults.innerHTML = ""
    }

    let parksList = document.createElement("ol")
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
            saveBtn.setAttribute("id", `${parkObject.park_name}: ${parkObject.mapped_location.human_address}`)
            saveBtn.addEventListener("click", saveParkToItin)
            parkResult.innerHTML = `<h3>${parkObject.park_name} ${parkObject.mapped_location.human_address}</h3>`
            parkResult.appendChild(saveBtn)

            parksList.appendChild(parkResult)
        })
        )

}


document.querySelector("#parksSearchBtn").addEventListener("click", findParkFeatures)

saveParkToItin = (evt) => {
    let chosenDiv = document.querySelector("#chosenParkDiv")
    if (chosenDiv.innerHTML !== "") {
        chosenDiv.innerHTML = "";
    }
    console.log(evt.target.id)
    let chosenPark = document.createElement("p")
    chosenPark.innerHTML = `${evt.target.id}`
    chosenDiv.appendChild(chosenPark)
}