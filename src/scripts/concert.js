
// // let concertDate = {
// // cocertsEvents(userInput) {

// let concertInput = document.querySelector("#concerts-search")


// let concertButton = document.querySelector("#concerts-search-button")
// concertButton.addEventListener("click", () => {
//   input(concertInput.value)
// })
                         
// function input(Genre) {
// fetch(`https://app.ticketmaster.com/discovery/v2/events?apikey=XDZ7nd4kIfrX7NgbDW8U1TVk09GslZnh&keyword=${Genre}&city=nashville&countryCode=US`)
//  .then(events =>events.json())
//  .then(parsedEvents => {
//      let events = parsedEvents._embedded.events;
//     events.forEach(element => {
      
        
        
         
//           let eventsName = element.name
//          let eventsDates = element.dates.start.localDate
//          let eventsGenre = element.classifications[0].genre.name

//          let concerthtml = document.querySelector("#concertsResult")
//          concerthtml.innerHTML += 
//          `<div class="art">
//          <h2>${eventsName}</h2>
//          <p>${eventsDates}</p>
//        <p>${eventsGenre}</p>
//        </div>
//        <button type="button" class="saveConcert">save</button>
//        `
        

//  })
//   })
// }
const inputConcerts = document.getElementById("concertSearch");
 let concertInput = document.querySelector("#concerts-search")
let concertButton = document.querySelector("#concerts-search-button")
 
let userSearchConcertsButton = document.getElementById("concertsButton");
userSearchConcertsButton.addEventListener("click", concertsValue);
const concertData = {
  eventNameData(eventType){
         fetch(`https://app.ticketmaster.com/discovery/v2/events?apikey=XDZ7nd4kIfrX7NgbDW8U1TVk09GslZnh&city=Nashville&countryCode=US&keyword=${eventType}&sort=date,asc`)
             .then(events => events.json())
             .then(Allevents => {
                 let allEvents = Allevents._embedded.events
                 allEvents.forEach(event => {
                     // console.log("Event name: " + event.name)  
                     let eventHTML = event.name
                     let eventAddy = event.dates.start.localDate
                     // Line below uses 3 arguments passed through resultsBuilder, which is then passed through appendResultsInput
                     domComponents.appendResultsInput(resultsBuilder(eventHTML, eventAddy, "concert"));
                 })
                 
                 clickSave();
             })
            }}
            function concertsValue() {
              let userSearchConcertValue = document.getElementById("concertSearch").value;
              console.log(userSearchConcertValue);
              concertData.eventNameData(userSearchConcertValue)
              let sectionInfo = document.getElementById("results_container");
              let header = document.createElement("h2");
              sectionInfo.innerHTML = " ";
              header.innerHTML = "Results";
              sectionInfo.appendChild(header);
              
           }