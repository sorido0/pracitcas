//alert("Hola soy Goku!!!");

// const nombre = prompt("Cual es tu nombre?");
// const num2 = prompt("Ingrese el segundo numero");

// const resultado = parseInt(num1) + parseInt(num2);
// alert('Tu nombre: ' + nombre);

// const nombre = "Goku";

// alert(nombre);

//console.log("estoy vivo")

// const $ = (selector) => document.getElementById(selector);

const nombre = document.getElementById('nombre');

const btn  = document.getElementById('btn');
btn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(nombre.value);

    nombre.value = "";
});




// console.log(email);



// btn.addEventListener('click', (e) => {
//     e.preventDefault();
//     console.log(email.value);
// });


