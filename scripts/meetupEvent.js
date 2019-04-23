let meetUpButton = document.querySelector("#meetups-search-button");
meetUpButton.addEventListener("click", function(e){
    let meetupsDom = document.querySelector("#meetups-search").value
    meetupsObject.meetUpsFetch(meetupsDom)

})