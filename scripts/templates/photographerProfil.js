
function photographBox(data){
    const { name, id, portrait, city, country, tagline, price } = data;
    const picture = `assets/photographers/${portrait}`;
        function getPhotographerProfil (){
            const photoText = document.createElement('div');
            photoText.classList.add('photoText');

            const h2 = document.createElement('h2');
            h2.textContent = name;
            h2.setAttribute("arialabel", "Identité du photographe");
            h2.setAttribute("alt", name)

            const cityCountry = document.createElement('div');
            cityCountry.textContent= city +','+''+country;
            cityCountry.classList.add('location');
            cityCountry.setAttribute("arialabel", "Ville et pays du photographe");

            const bio = document.createElement('div');
            bio.textContent=tagline;
            bio.classList.add('bio');
            bio.setAttribute("arialabel", "Slogan du photographe");


            photoText.appendChild(h2)
            photoText.appendChild(cityCountry);
            photoText.appendChild(bio);

        return (photoText);
        }
        function getPhotographerPicture() {
            const photoImg = document.createElement('div');
            photoImg.classList.add('photoImg')


            const img = document.createElement('img');
            img.setAttribute("src", picture);
            img.setAttribute("alt", name);

            photoImg.appendChild(img);
        
        return(photoImg);
        }
    return { name, id, picture, city, country, tagline, price, getPhotographerProfil, getPhotographerPicture }
}



/*const picture = `assets/photographers/${portrait}`;
    photographerHeader.innerHTML = 
    `
    <div class="card2-bio">
        <div class="info-photograpgher-media">
            <h2 class="photographer-name">${name}</h2>
            <p class="location">${city}, ${country}</p>
            <p class="tagline">${tagline}</p>
        </div>
        <div class="container-contact">
            <button class="contact-button">Contactez-moi</button>
        </div>
    </div>
    <div class="portrait-container">
        <img src=${picture} alt="${name}" class="portraitMedia">
    </div
    `
*/