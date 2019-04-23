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


                
                    
                    meetupResult.innerHTML += `<div>
                    <div class="search__result">
                        <p>
                        ${eventName}
                        <br />
                        ${event.start.local}</p>
                    </div>
                    <button type="button" class="saveButton ">Save</button>
                 </div>
            
            
             `
        let searchDom = document.querySelector(".meetup__saved")
        document.querySelector(".saveButton").addEventListener("keyup", function(){
            let searchResult = document.querySelector(".search__result").value
            console.log(searchResult)
            searchDom.innerHTML = `<h4> ${searchResult}</h4>`
        }) 
                    
            })
            
            
        }
        
        )}}
        
          