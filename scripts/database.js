console.log("its working")

console.log()
let meetupResult = document.querySelector(".meetup__result")
let events = [];
const meetupsObject = {
    meetUpsFetch(meetupsDom) {
    return fetch(`https://www.eventbriteapi.com/v3/events/search/?location.latitude=36.174465&location.longitude=-86.767960&start_date.keyword=today&q=${meetupsDom}`, {
        headers: {"Authorization": "Bearer 2BDDGL3KGZR3QEHEIKWY"}})
        .then(response => response.json())
        .then(response => {
            console.log(response)
            response.events.forEach( event => {
                let eventName = event.name.text
                console.log(event.start.local)
                console.table(eventName)
                events.push(eventName)


                
                    
                    meetupResult.innerHTML = `<div class="main">
                            
                                            <h4>${event.name.text}</h4>
                                            <p>${event.start.local}</p>
                                            
                                            <button>Save</button>
                                            </div>
                                            `
                                          
                

                
            })
            
            
            
        }
        
        )}}
        
          