let meetUpButton = document.querySelector("#meetups-search-button");

// meetUpButton.addEventListener("keyup", meetupsObject.meetUpsFetch(""))

meetUpButton.addEventListener("click", function(e){
    let meetupsDom = document.querySelector("#meetups-search").value
    meetupsObject.meetUpsFetch(meetupsDom)

})