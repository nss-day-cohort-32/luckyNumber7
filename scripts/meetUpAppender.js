

function meetupValue(){
    let meetupsDom = document.querySelector("#meetups-search").value
    console.log(meetupsDom)
    let meetUpDom = document.querySelector(".meetup__result")
    meetUpDom.innerHTML += `<h4>${meetupsDom}</h4>`
}



