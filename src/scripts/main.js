





fetch(`https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=343&apikey=XDZ7nd4kIfrX7NgbDW8U1TVk09GslZnh`)
.then(res =>res.json())
.then(parsedEvents => {
console.table(parsedEvents);

})


