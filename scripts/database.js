console.log("its working")
let events = [];
const meetupsObject = {
    meetUpsFetch(meetUpsSearchParam) {
    return fetch(`https://www.eventbriteapi.com/v3/events/search/?location.latitude=36.174465&location.longitude=-86.767960&start_date.keyword=today&q=${meetUpsSearchParam}`, {
        headers: {"Authorization": "Bearer 2BDDGL3KGZR3QEHEIKWY"}})
        .then(response => response.json())
        .then(response => {
            console.log(response.events)
            response.events.forEach( event => {
                console.log(event.name.text)
                
        })}
        
        )}}
            
        meetupsObject.meetUpsFetch("education")