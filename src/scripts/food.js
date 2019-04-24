let foodOptions = document.getElementById("foodOptions");
let cuisineTypeNumber = "";
let resultsDiv = document.getElementById("displayFoodResults")

console.log(cuisineTypeNumber);

let restaurantChoices = function () {
    // fetch restaurant data
    fetch(`https://developers.zomato.com/api/v2.1/search?entity_id=1138&entity_type=city&count=4&cuisines=${cuisineTypeNumber}`, {
        "headers": {
            "user-key": "ce5dc477c3311b85af742db4ad454c90",
        }
    })
        .then(response => response.json())
        .then(restaurantChoices => {
            resultsDiv.innerHTML = ""
            console.table("restaurant choices", restaurantChoices);
            for (var i = 0; i < restaurantChoices.restaurants.length; i++) {
                let restaurantName = restaurantChoices.restaurants[i].restaurant.name
                let restaurantAddress = restaurantChoices.restaurants[i].restaurant.location.address
                resultsDiv.innerHTML += `<div id = "foodDiv${[i]}">
            <h2>${restaurantName}</h2>
            <p>${restaurantAddress}</p>
            </div>
            <button id = "foodSave${[i]}">SAVE</button>`
            document.getElementById(`foodDiv${[i]}`).classList.add(`restaurantChoice${[i]}`)
            console.log(`foodSave${[i]}`);
            document.getElementById(`foodSave${i}`).onclick = () =>{
                let restaurantChoice = document.getElementById("restaurantChoice")
                let foodDiv = ""
                foodDiv = document.getElementById(`foodDiv${[i]}`)
                restaurantChoice.innerHTML += `Restaurant: ${foodDiv.innerHTML}`
            }
            }
        })
}
//select a cuisine type
foodOptions.onchange = function () {
    cuisineTypeNumber = foodOptions.options[foodOptions.selectedIndex].value;
    //console.table represents data in console as table
    restaurantChoices()
    console.log("cuisine type number", cuisineTypeNumber)
    // console.log(restaurantChoices());
}

