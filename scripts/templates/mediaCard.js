class MediaImg{
    constructor (media, photographName){
        this.photographName= photographName;
        this.title = media.title;
        this.alt = media.alt;
        this.likes = media.likes;
        this.image = media.image;
        this.id = media.id
    }
}

function mediaBox (data) {
    const { title, image, likes, price, date} = data;
    const picture = `assets/photographers/${this.photographName}/${this.image}`;

    function mediaImg(){
        const portfolio = document.createElement ('div');
        portfolio.classList.add('portfolio');

        const mediaBlock = document.createElement ('div');
        mediaBlock.classList.add('mediaBlock');
        
        const img = document.createElement('img');
            img.setAttribute("src", picture);
            img.setAttribute("alt", title);
        
        const h2 = document.createElement('h2');
        h2.textContent = title;
        h2.setAttribute("arialabel", "titre de la photo");
        h2.setAttribute("alt", title)

        const likes = document.createElement ('div');
        likes.classList.add('likes');

        portfolio.appendChild(mediaBlock);
        mediaBlock.appendChild(img);
        mediaBlock.appendChild(h2);
        mediaBlock.appendChild(likes);

        return (portfolio);
    }
    return {title, image, likes, price, date, mediaImg};
}