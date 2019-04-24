
let concertDate = {
cocertsEvents(userInput) {

fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=XDZ7nd4kIfrX7NgbDW8U1TVk09GslZnh&city=Nashville&classificationName=music&keyword=${userInput}`)
 .then(events =>events.json())
 .then(parsedEvents => {
    console.log(parsedEvents)
     const events = parsedEvents._embedded.events;
    events.forEach(element => {
        
         console.log(element.name);
         element.dates.start.localDate;
         console.log(element.dates.start.localDate)
         console.log(element.classifications[0].genre.name)
         
         let eventsName = element.name
        let eventsDates = element.dates.start.localDate
        let eventsGenre = element.classifications[0].genre.name
        let concerthtml = document.querySelector("#eventsOptions")
         concerthtml.innerHTML += 
         `<h2>${eventsName}</h2>
        <p>${eventsDates}</p>
      <p>${eventsGenre}</p>`
        

 })
  })
  
}
}