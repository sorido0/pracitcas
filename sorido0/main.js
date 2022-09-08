//alert("estoy vivo");
console.log("estoy vivo");
const $ = (selector) => document.getElementById(selector);


const vIniciar = 'iro';
const extencion = '.jpg';
const shahrater = 'v1/public/characters';
const keyPublic1 = '2f5bc2b41e34fe83f11148f255cea3c6';
const hashPrivate = 'e928c10e4138f83d713dba249cc6ead8';

const superH = document.getElementById('superH');
const nombre = document.getElementById('name');
const foto = document.getElementById('imgH');
const description1 = document.getElementById('descripcion');
const buscar = document.getElementById("btn");
const div = $("carta");

console.log(div);




const ironPage = () => {
    const url = `https://gateway.marvel.com:443/v1/public/characters/1017104?ts=1&apikey=${keyPublic1}&hash=${hashPrivate}`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
           console.log(data);
            const { results } = data.data;
           console.log(results);
            const { name, description, thumbnail } = results[0];
           console.log(name, description, thumbnail);
            nombre.innerHTML = name;
            description1.innerHTML = description;
            foto.src = `${thumbnail.path}.${thumbnail.extension}`;
        })
        .catch(error => console.log(error));
}

ironPage();

    



const nombreS = $('nombreS');
const x = 'thor';
//nombreS.value = 'thor';
//const url = `http://gateway.marvel.com/${shahrater}?nameStartsWith=${nombreS}&ts=1&apikey=${keyPublic1}&hash=${hashPrivate}`;



console.log(buscar);
const urlNombre = (nombreS) => {
    return `http://gateway.marvel.com/${shahrater}?nameStartsWith=${nombreS}&ts=1&apikey=${keyPublic1}&hash=${hashPrivate}`;
}

//console.log(urlNombre(nombreS));


// const rederMaver = (done) => {
//     alert('hola');

//     const loqueEnContre = fetch(urlNombre(x))
//     loqueEnContre.then(response => response.json())
//         .then(data => {
//             const hayData = data.data.count;
//             if (hayData > 0) {
//                 done(data.data);
//                 console.log(data)
//             } else {
//                 console.log("no hay datos")
//                 alerta();
//             }

//         })
//         .catch(error => console.log(error));


// }

// rederMaver(cart);
// console.log(nombreS.value);
// urlNombre(nombreS.value);
// console.log(urlNombre(nombreS.value));

buscar.addEventListener('click', (e) => {
    e.preventDefault();

    console.log(div);
    div.style.display = "none";
    const cosaDelDiv = document.getElementById('carta1');
    //console.log(!cosaDelDiv);
    
    if (!!cosaDelDiv) {
        cosaDelDiv.style.display = "none";
        console.log(cosaDelDiv);
    }
    

    //document.getElementById('carta').remove();

    //urlNomnre(nombreS.value);


    const rederMaver = (done) => {
        //alert('hola');

        const loqueEnContre = fetch(urlNombre(nombreS.value))
        loqueEnContre.then(response => response.json())
            .then(data => {
                const hayData = data.data.count;
                if (hayData > 0) {
                    done(data.data);
                    console.log(data)
                } else {
                    console.log("no hay datos" + y)
                    alerta();
                }

            })
            .catch(error => console.log(error));


    }

    rederMaver((data) => {
        console.log(data);
        //alert('rederMaver');
        
        data.results.forEach(p => {
            // console.log(p);

            // console.log(p.description);
            if (!!p.description) {
                console.log('existe')
                cart(p);
            }

        });

    });

});

// rederMaver((data) => {
//     console.log(data);
//     alert('rederMaver');

//     data.results.forEach(p => {
//         // console.log(p);

//         // console.log(p.description);
//         if (!!p.description) {
//             console.log('existe')
//             cart(p);
//         }

//     });

// });


const cart = (p) => {

    //const carta = document.getElementById('carta');

    // if (!!carta) {
    //     document.getElementById('carta').remove();
    // }
    
    const div = document.createRange().createContextualFragment(/*html*/
            `
    <div class="col" id="carta1" name="carta1">

        <div class="card" style="width: 18rem;" id="superH">
            <img src=${p.thumbnail.path + "." + p.thumbnail.extension} class="card-img-top" alt="..." id="imgH">
            <div class="card-body">
            <h5 class="card-title" id="name"> ${p.name}</h5>
            <p class="card-text" id="descripcion"> ${p.description}</p>

            </div>
        </div>
    </div>
    `);

        const seccesion = document.querySelector('section');
        seccesion.appendChild(div);
    
}

const alerta = () => {
    const div = document.createRange().createContextualFragment(/*html*/
        `
    <div class="alert alert-danger mt-5" role="alert">
        No exite personaje con ese nombre o Initial
    </div>
    `
    );

    const seccesion = document.querySelector('section');
    seccesion.appendChild(div);

}


// const avenger = ({nombreS}) => {

// const url = `http://gateway.marvel.com/${shahrater}?nameStartsWith=${nombreS}&ts=1&apikey=${keyPublic1}&hash=${hashPrivate}`;


//     rederMaver(hulk)
//     cart(p);
// }

//alert("Esoty vivo el index.js");

// const getData = (done) => {

//     const resultados = fetch("https://rickandmortyapi.com/api/character/");
//     resultados.then(response => response.json())
//         .then(data => {
//             done(data.results);
//         }).catch(error => {
//             console.log(error);
//         });

// }

// getData((data) => {
//     console.log(data);

//     data.forEach(personaje => {

//         const article = document.createRange().createContextualFragment(/*html*/
//             `
//             <article>
//             <div class="image-container">
//                 <img src=${personaje.image} alt="Rick">
//             </div>

//             <h2> ${personaje.name} </h2>
//             <samp> ${personaje.status} </samp>

//             </article>


//             `);

//         const main = document.querySelector("main");
//         main.appendChild(article);


//     })
// }
// );