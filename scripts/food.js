let foodOptions = document.getElementById("foodOptions");
let cuisineTypeNumber = "";
console.log(cuisineTypeNumber);


function restaurantChoices (){ 
// fetch restaurant data
fetch(`https://developers.zomato.com/api/v2.1/search?entity_id=1138&entity_type=city&count=4&cuisines=${cuisineTypeNumber}`,{
    "headers": {
        "user-key": "ce5dc477c3311b85af742db4ad454c90",
    }})
    .then(response => response.json())
    .then(restaurantChoices => {
        console.table(restaurantChoices);
    })
}
    //select a cuisine type
    foodOptions.onchange = function () {
        cuisineTypeNumber = foodOptions.options[foodOptions.selectedIndex].value;
        //console.table represents data in console as table
        // restaurantChoices();
        console.log(cuisineTypeNumber);
        console.table(restaurantChoices());
    }

    