console.log("its working")
let meetup = document.getElementById("meetups-search").value
let events = [];
const meetupsObject = {
    meetUpsFetch(meetup) {
    return fetch(`https://www.eventbriteapi.com/v3/events/search/?location.latitude=36.174465&location.longitude=-86.767960&start_date.keyword=today&q=${meetup}`, {
        headers: {"Authorization": "Bearer 2BDDGL3KGZR3QEHEIKWY"}})
        .then(response => response.json())
        .then(response => {
            console.log(response)
            response.events.forEach( event => {
                let eventName = event.name.text
                console.log(event.start.local)
                console.table(eventName)
                events.push(eventName)


                for(let i = 0; i < 4; i++){
                    eventName[i] = eventName
                    meetUpDom.innerHTML += `<div class="main">
                            
                                            <h4>${eventName}</h4>
                                            <p>${event.start.local}</p><br/>
                                            <button>Save</button>
                                            </div>
                                            `
                                          
                }

                
            })
            
            
            
        }
        
        )}}
            console.log(events)
          