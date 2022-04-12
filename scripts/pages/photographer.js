//Mettre le code JavaScript lié à la page photographer.html

async function getPhotographer() {
    const response = await fetch ("./data/photographers.json");
    const { photographers, media} = await response.json();
    const params = new URL (document.location).searchParams; 
    const hasId = params.has("id");
        if (! hasId) {
            window.location.replace("http://127.0.0.1:5500/index.html");
        }
    const photographerId = params.get("id");
    const photographerfind = photographers.find(p => p.id == photographerId)
    if (! photographerfind){
        window.location.replace();
    }
    const selectedMedia =  media.filter(media => media.photographerId== photographerId );
    displayData(photographerfind, selectedMedia);
    

}
getPhotographer();

function displayData(photographer, media) {
    const photographerHeader = document.querySelector(".photograph-header");
    const PhotographeBox = photographBox(photographer);
    const PhotographerProfil = PhotographeBox.getPhotographerProfil();
    const photograpgherPortrait = PhotographeBox.getPhotographerPicture();
    console.log (PhotographerProfil)
    photographerHeader.appendChild(PhotographerProfil);
    photographerHeader.appendChild(photograpgherPortrait);
    
};

