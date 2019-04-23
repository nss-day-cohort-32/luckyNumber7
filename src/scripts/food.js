let foodOptions = document.getElementById("foodOptions");
let cuisineTypeNumber = "";
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
            console.table("restaurant choices", restaurantChoices);
        })
}
//select a cuisine type
foodOptions.onchange = function () {
    cuisineTypeNumber = foodOptions.options[foodOptions.selectedIndex].value;
    //console.table represents data in console as table
    restaurantChoices();
    console.log("cuisine type number", cuisineTypeNumber);
    // console.log(restaurantChoices());
}


    for (var i = 0; i < restaurantChoices.length; i++) {
        document.getElementById("displayResults").innerHTML = `${restaurantChoices[i]}`
    }