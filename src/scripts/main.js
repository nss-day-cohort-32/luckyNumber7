


const searchInput = document.querySelector(".concertResult")
const submit = document.querySelector('.stored');
submit.addEventListener("click", function(){

 fetch("https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=343&apikey=XDZ7nd4kIfrX7NgbDW8U1TVk09GslZnh",)
.then(events =>events.json())
.then(parsedEvents => {
    console.log(parsedEvents)
    const events = parsedEvents._embedded.events;
    events.forEach(element => {
        
        console.log(element.name);
        element.dates.start.localDate;
         console.log(element.dates.start.localDate)
         console.log(element.classifications[0].genre.name)
         
         const eventsName = element.name
         const eventsDates = element.dates.start.localDate
        const eventsGenre = element.classifications[0].genre.name
         const concerthtml = document.querySelector(".nashvilleConcert")
         concerthtml.innerHTML += `<h2>${eventsName}</h2>
         <p>${eventsDates}</p>
        <p>${eventsGenre}</p>`
        

    });
    });
});
