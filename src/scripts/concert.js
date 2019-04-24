
// let concertDate = {
// cocertsEvents(userInput) {

let concertInput = document.querySelector("#concerts-search")


let concertButton = document.querySelector("#concerts-search-button")
concertButton.addEventListener("click", () => {
  input(concertInput.value)
})
                         
function input(Genre) {
fetch(`https://app.ticketmaster.com/discovery/v2/events?apikey=XDZ7nd4kIfrX7NgbDW8U1TVk09GslZnh&keyword=${Genre}&city=nashville&countryCode=US`)
 .then(events =>events.json())
 .then(parsedEvents => {
    console.log(parsedEvents)
     let events = parsedEvents._embedded.events;
    events.forEach(element => {
        
         console.log(element.name);
         element.dates.start.localDate;
         console.log(element.dates.start.localDate)
         console.log(element.classifications[0].genre.name)
         
      //    let eventsName = element.name
      //   let eventsDates = element.dates.start.localDate
      //   let eventsGenre = element.classifications[0].genre.name
         let concerthtml = document.querySelector("#concertsResult")
         concerthtml.innerHTML += 
         `<h2>${eventsName}</h2>
         <p>${eventsDates}</p>
       <p>${eventsGenre}</p>`
        

 })
  })
}
