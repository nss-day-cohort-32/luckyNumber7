var foodOptions = document.getElementById("foodOptions");
var cuisineTypeNumber = 
console.log(cuisineTypeNumber);


//select a cuisine type
foodOptions.onchange () => {
    cuisineTypeNumber = foodOptions.options[foodOptions.selectedIndex].value;
    console.log(cuisineTypeNumber);
}

// fetch restaurant data
fetch(`https://developers.zomato.com/api/v2.1/search?entity_id=1138&entity_type=city&count=4&cuisines=${cuisineTypeNumber}`,{
"headers": {
  "user-key": "ce5dc477c3311b85af742db4ad454c90",
}})
        .then(response => response.json())
        .then(restaurantChoices => {
//console.table represents data in console as table
            console.table(restaurantChoices);
        })
