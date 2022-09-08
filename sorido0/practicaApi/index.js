//alert("Esoty vivo el index.js");

const getData = (done) => {

    const resultados = fetch("https://rickandmortyapi.com/api/character/");
    resultados.then(response => response.json())
        .then(data => {
            done(data.results);
        }).catch(error => {
            console.log(error);
        });

}

getData((data) => {
    console.log(data);

    data.forEach(personaje => {

        const article = document.createRange().createContextualFragment(/*html*/
            `
            <article>
            <div class="image-container">
                <img src=${personaje.image} alt="Rick">
            </div>

            <h2> ${personaje.name} </h2>
            <samp> ${personaje.status} </samp>
            
            </article>


            `);

        const main = document.querySelector("main");
        main.appendChild(article);


    })
}
);