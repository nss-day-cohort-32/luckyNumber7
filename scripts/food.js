var foodOptions = document.getElementById("foodOptions");
var cuisineTypeNumber = 
console.log(cuisineTypeNumber);


//select a cuisine type
foodOptions.onchange = function (){
    cuisineTypeNumber = foodOptions.options[foodOptions.selectedIndex].value;
    console.log(cuisineTypeNumber);
}

// fetch restaurant data
fetch(`https://developers.zomato.com/api/v2.1/search?entity_id=1138&entity_type=city&count=4&cuisines=${option.value}`,{
"headers": {
  "user-key": "ce5dc477c3311b85af742db4ad454c90",
}})
        .then(response => response.json())
        .then(parsedFoods => {
//console.table represents data in console as table
            console.table(parsedFoods);
//loop over local food data, grab barcode and use it to fetch API data
            parsedFoods.forEach(cuisine => {
                fetch(
                    "https://developers.zomato.com/api/v2.1/search?entity_id=1138&entity_type=city&count=4&cuisines=148"
                )
                console.log("cuisine",cuisine)
                .then(APIfoods => APIfoods.json())
                .then(parsedAPIfoods => {
//target HTML element and inject DOM element created by foodFactory function
                    foodList.innerHTML += foodFactory(food, parsedAPIfoods);
                });
            });
        });

