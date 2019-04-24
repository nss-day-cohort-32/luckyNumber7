const domComponents = {
    // Called initially when page is loaded
    appendSearchInput(domElement){
        let searchContainer = document.querySelector("#search_container");
        searchContainer.innerHTML += domElement;
    },

    // Called when "search" is clicked, "appendResultsInput" is called
    appendResultsInput(domElement){
        let searchContainer = document.querySelector("#results_container");
        searchContainer.innerHTML += domElement;
    }
}