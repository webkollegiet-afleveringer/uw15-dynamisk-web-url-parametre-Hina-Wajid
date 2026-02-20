const pageSearch = window.location.search;
const params = new URLSearchParams(pageSearch);
const id = params.get("id");
const mainWrapperDom = document.querySelector("#main-wrapper")

const url = `./data/${id}.json`;
fetch(url)
    .then((respons) => respons.json())
    .then((data) => {
        page(data);
    })
function page(data) {
    const { image, destination, title, subtitle, text, facilities } = data;
    console.log(image);


    const destinationDetailContainerString = `<div class="destination__detail__container"></div>`
    mainWrapperDom.insertAdjacentHTML("beforeend", destinationDetailContainerString);

    const destinationDetailContainer = document.querySelector(".destination__detail__container");


    const destinationDetailImageString = `<figure class="destination__detail_image"></figure>`
    destinationDetailContainer.insertAdjacentHTML("beforeend", destinationDetailImageString);

    const destinationDetailImage = document.querySelector(".destination__detail_image");
    const destinationDetailFigCaption =  /*html*/
        `
        <figcaption class="icon-favourite">
        <svg data-id =${id} class="button__add_to_fav" width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.50034 12C6.70106 11.9997 6.89706 11.9391 7.06284 11.8259C9.51878 10.1587 10.5822 9.01562 11.1688 8.30094C12.4188 6.7775 13.0172 5.21344 13.0003 3.51969C12.9807 1.57875 11.4235 0 9.52909 0C8.15159 0 7.19753 0.775938 6.6419 1.42219C6.6243 1.44245 6.60255 1.4587 6.57813 1.46984C6.55371 1.48098 6.52718 1.48674 6.50034 1.48674C6.4735 1.48674 6.44697 1.48098 6.42255 1.46984C6.39812 1.4587 6.37638 1.44245 6.35878 1.42219C5.80315 0.775313 4.84909 0 3.47159 0C1.57721 0 0.0200272 1.57875 0.000339508 3.52C-0.0165358 5.21406 0.582526 6.77813 1.8319 8.30125C2.41846 9.01594 3.4819 10.1591 5.93784 11.8263C6.10366 11.9393 6.29965 11.9998 6.50034 12Z" fill="black"/></svg>
             <span>Fovorit </span>          
        </figcaption>       
        <img src="img/${image}" alt="">
         `
    destinationDetailImage.insertAdjacentHTML("beforeend", destinationDetailFigCaption);




    const destinationDetailCardString = `<article class="destination__detail_card"></article>`
    destinationDetailContainer.insertAdjacentHTML("beforeend", destinationDetailCardString);



    const destinationDetailCard = document.querySelector(".destination__detail_card");
    const destinationFacilitiesString =  /*html*/
        `<h2 class="destination__name">${destination}</h2>
                <h3 class="destination__title">${title}</h3>
                <h4 class="destination__subtitle">${subtitle}</h4>
                <p class="destination__text">${text}</p>
    <ul class="destination__facilities">
    <p>facilities</p>
    </ul>`
    destinationDetailCard.insertAdjacentHTML("beforeend", destinationFacilitiesString);

    const destinationFacilities = document.querySelector(".destination__facilities");
    data.facilities.forEach(option => {
        const facilitiesString =
            /*html*/
            `
    <li>${option}</li>
    `
        console.log(facilitiesString);
        destinationFacilities.insertAdjacentHTML("beforeend", facilitiesString);
    }
    )
    toggleHearts();
    setHearts();
}



// const image = data.image  // this is how we access from data object
/*  console.log(data)
 console.log(data.title)
 console.log(title)
 console.log(mainWrapperDom); */