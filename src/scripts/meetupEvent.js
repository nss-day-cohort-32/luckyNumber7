

let userSearchMeetUpsButton = document.getElementById("meetups-search-button");
userSearchMeetUpsButton.addEventListener("click", meetupsValue);


function meetupsValue() {
    let userSearchMeetupValue = document.getElementById("meetups-search").value;
    console.log(userSearchMeetupValue);
    data.queryEvents(userSearchMeetupValue);
    let sectionInfo = document.getElementById("results_container");
    let header = document.createElement("h2");
    sectionInfo.innerHTML = " ";
    header.innerHTML = "Meetup Results";
    sectionInfo.appendChild(header);
 }






 





 resultsBuilder = (itemName, itemInfo, resultType) => {
    let resultsField = ""
    resultsField = 
    `
    <div>
        <div>
            <h4>
            ${itemName}</h4>
            <br />
           <p> ${itemInfo}</p>
        </div>
        <button type="button" class="saveButton ${resultType}">Save</button>
     </div>
     `

     return resultsField;
}

itineraryBuilder = (savedData, buttonClass) => {
    let itineraryField = 
    `
    <p class="finalAppend">
    ${savedData}</p>
    `
    let finalResult = document.getElementById(buttonClass)
    finalResult.innerHTML = itineraryField;
}


let getSavedResult = (event) => {
    let savedHTML = event.target.parentElement.firstElementChild.innerHTML;
    let buttonClass = event.target.classList[1];
    itineraryBuilder(savedHTML, buttonClass);
 }


let clickSave = () => {
    // Taking all elements with class="saveButton"
   let saveButton = document.querySelectorAll(".saveButton");
//    This loops through all "saveButton" elements and adds an event listener to the save buttons.
   for(let i = 0; i < saveButton.length; i++) {
    //    Then runs "getSavedResult" defined at line 71
      saveButton[i].addEventListener("click", getSavedResult);
   }
}

