const url = `./data/destinations.json`;
console.log(url);

const mainWrapperDom = document.querySelector("#main-wrapper")
fetch(url)
    .then((respons) => respons.json())
    .then((data) => {
        console.log(data)
        page(data);

    })
function page(data) {
    const { id, image, destination, title, subtitle, text, facilities } = data;

    const destinationContainerString = /* html */
        `
    <section class="destination-container">
        <h1>Appartment for rent</h1> 
        <div class="destination-grid">
        </div>
    </section>`
    

    const destinationCardString = data.destinations.map(element => {

        return /* html */`
<figure class="destination-card">
                    <div class="destination-card__img-wrapper"><img src="img/${element.image}" alt="${element.subtitle}"></div>
                    <figcaption class="destination__card__info">
                        
                     
                           <svg class="button__add_to_fav" data-id =${element.id} width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.50034 12C6.70106 11.9997 6.89706 11.9391 7.06284 11.8259C9.51878 10.1587 10.5822 9.01562 11.1688 8.30094C12.4188 6.7775 13.0172 5.21344 13.0003 3.51969C12.9807 1.57875 11.4235 0 9.52909 0C8.15159 0 7.19753 0.775938 6.6419 1.42219C6.6243 1.44245 6.60255 1.4587 6.57813 1.46984C6.55371 1.48098 6.52718 1.48674 6.50034 1.48674C6.4735 1.48674 6.44697 1.48098 6.42255 1.46984C6.39812 1.4587 6.37638 1.44245 6.35878 1.42219C5.80315 0.775313 4.84909 0 3.47159 0C1.57721 0 0.0200272 1.57875 0.000339508 3.52C-0.0165358 5.21406 0.582526 6.77813 1.8319 8.30125C2.41846 9.01594 3.4819 10.1591 5.93784 11.8263C6.10366 11.9393 6.29965 11.9998 6.50034 12Z" fill="black"/></svg>

                        <a href="destination.html?id=${element.id}">Read More</a>
                    </figcaption>
                </figure>

        `
    }).join("");
    mainWrapperDom.insertAdjacentHTML("beforeend", destinationContainerString);
    const destinationGrid = document.querySelector(".destination-grid");
    destinationGrid.insertAdjacentHTML("beforeend", destinationCardString);
    toggleHearts();
    setHearts();
}

