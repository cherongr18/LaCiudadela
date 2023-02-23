var enlace 

function getCharacters(done) {
    const results = fetch(enlace);

    results
    .then(response => response.json())
    .then(data => {
        done(data)
    });
}


for(var i=1;i<=826;i++)
{
    var enlace =`https://rickandmortyapi.com/api/character/${i}`

    getCharacters(data => {
    

        const article = document.createRange().createContextualFragment(/*html*/`

<article>
    <div class="card__father">
        <div class="card">
            <div class="card__front" style="background-image: url('${data.image}');">
                <h1></h1>
                <div class="bg"></div>
                <div class="body__card_front">
                </div>
            </div>
            <div class="card__back">
                 <div class="body__card_back">
                <h5>${data.name}</h5>
                <p class="pe">Status:</p><h6>${data.status}</h6>
                <p class="pe">Species:</p><h6>${data.species}</h6>
                </div>
            </div>
        </div>
    </div>
</article>

`);

        const main = document.querySelector("main");
        main.append(article);
});


}


