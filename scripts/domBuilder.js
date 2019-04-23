let dom = document.querySelector(".search__field")
dom.innerHTML = ` 

    <select id="parks-search">
        <option value="disc_golf">Disc Golf</option>
        <option value="ada_accessible">Handicap Accessible</option>
        <option value="baseball_fields">Baseball Fields</option>
        <option value="basketball_courts">Basketball Courts</option>
        <option value="dog_park">Dog Park</option>
        <option value="hiking_trails">Hiking Trails</option>
        <option value="swimming_pool">Swimming Pool</option>
    </select>
    <button type="button" id="parks-search-button">Search</button>
</section>
<section id="sectionid">
    <input type= "text" name="concerts" id="concerts-search" placeholder="restaurants by food type">
    <button type="button" id="concerts-search-button">Search</button>
</section>
<section id="sectionid">
    <input type= "text" name="restaurants" id="restaurants-search" placeholder="concerts by events">
    <button type="button" id="restaurants-search-button">Search</button>
</section>

<section id="sectionid">
    <input type= "text" name="meetups" id="meetups-search" placeholder="meetups by topic">
    <button type="button" id="meetups-search-button">Search</button>
</section>
`