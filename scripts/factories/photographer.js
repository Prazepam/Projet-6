function photographerFactory(data) {
    const { name, id, portrait, city, country, tagline, price } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement('article');

        const img = document.createElement('img');
        img.setAttribute("src", picture)

        const photographBox = document.createElement('div');
        photographBox.classList.add('photographBox');

        const portraitBox = document.createElement('div');
        portraitBox.classList.add('portraitBox');

        const h2 = document.createElement('h2');
        h2.textContent = name;
        h2.setAttribute("arialabel", "Identité du photographe");

        const cityCountry = document.createElement('div');
        cityCountry.textContent= city +','+''+country;
        cityCountry.classList.add('location');
        cityCountry.setAttribute("arialabel", "Ville et pays du photographe");

        const bio = document.createElement('div');
        bio.textContent=tagline;
        bio.classList.add('bio');
        bio.setAttribute("arialabel", "Slogan du photographe");

        const tariff = document.createElement('div');
        tariff.textContent = price+"€/jour";
        tariff.classList.add('tariff');
        tariff.setAttribute("arialabel", "Tarif du photographe")
        
        const link = `http://127.0.0.1:5500/photographer.html?id=${id}`

        const linkProfilPhotograph = document.createElement ('a');
        linkProfilPhotograph.classList.add('linkProfilPhotograph');
        linkProfilPhotograph.setAttribute('href', link);
        linkProfilPhotograph.setAttribute("arialabel", "lien vers le profil du photographe");




        article.appendChild(linkProfilPhotograph);
        linkProfilPhotograph.appendChild(photographBox);
        photographBox.appendChild(portraitBox);
        portraitBox.appendChild(img);
        photographBox.appendChild(h2)
        article.appendChild(cityCountry);
        article.appendChild(bio);
        article.appendChild(tariff);

        
        


        return (article);
    }
    return { name, id, picture, city, country, tagline, price, getUserCardDOM }
}