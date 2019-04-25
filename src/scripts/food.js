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
    .then(foods => foods.json())
    .then(Allfoods => {
        let allfoods = Allfoods.restaurants
        allfoods.forEach(foods => {
             let foodHTML = foods.restaurant.name;
             let addressHTML = foods.restaurant.location.address;
             // Line below uses 3 arguments passed through resultsBuilder, which is then passed through appendResultsInput
             domComponents.appendFoodInput(resultsBuilder(foodHTML, addressHTML, "rest"));
        })
         // Line below is a function declared in eventlistener.js | Used to apply eventlisteners to every save button
        clickSave();
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

let foodClickSave = () => {
    let foodSave = document.querySelectorAll(".foodSave");
    for(let i = 0; i < foodSave.length; i++){
        foodSave[i].addEventListener("click", getFoodResult);
        console.log(getFoodResult);
    }
}

let getFoodResult = (event) => {
    let foodResultHTML = event.target.parentElement.firstElementChild.innerHTML;
    console.log(foodResultHTML);
    let buttonClass = event.target.classList[1]
    listBuilder(foodResultHTML, buttonClass);
}

listBuilder = (taco1, taco2) => {
    let itineraryField = `<h3 class="finalAppend">
                        ${taco1}</h3> `
    let finalResult = document.getElementById(taco2)
    finalResult.innerHTML = itineraryField
    console.log
}