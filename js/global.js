function setLocalItem(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
}
function getLocalItem(key) {
    return JSON.parse(localStorage.getItem(key)) || []
}

function setHearts() {

    const addToFav = mainWrapperDom.querySelectorAll(".button__add_to_fav");
    const favorites = getLocalItem("favorites");
      if (!addToFav.length) {
        return
    }
    addToFav.forEach((btn) => {
        const id = btn.dataset.id;
        if(favorites.includes(id))
        {
             btn.classList.add("active");
        }
    })
     
}

function toggleHearts() {

    const addToFav = mainWrapperDom.querySelectorAll(".button__add_to_fav");
    if (addToFav.length == 0) {
        return
    }
     
    addToFav.forEach((btn) => {
        btn.addEventListener("click", () => {
            //find id
            const id = btn.dataset.id;
            //getLocalItem function definet i global.js
            let favorites = getLocalItem("favorites");
            //fjern den hvis den findes
            if (favorites.includes(id)) {
                //.filter laver et nyt array. den beholder kun værdier hvor fav!=id den smider
                favorites = favorites.filter(fav => fav !== id)
                btn.classList.remove("active");
            }
            else
            //tilføj hvis den ikke finded
            {
                favorites.push(id);
                btn.classList.add("active");
            }

            setLocalItem("favorites", favorites)
        })
    })

    /* function addtofavClick(event){
    
        console.log(event.target);
        console.log(event.currentTarget);
        
        svgDom = event.currentTarget
        svgDom.classList.toggle("active");
    } */
}