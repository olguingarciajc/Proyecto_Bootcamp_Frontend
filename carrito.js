const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})


let products = [
    {
        id: 1,
        title: "Curso de JS",
        precio: 100,
        descripcion: "Buen curso"
    },
    {
        id: 2,
        title: "Curso de HTML",
        precio: 100,
        descripcion: "Super curso"
    },
    [
    {
        id: 3,
        title: "Caja Grande",
        precio: 100,
        descripcion: "Buena Caja Grande"
    },
    {
        id: 4,
        title: "Caja Mediana",
        precio: 100,
        descripcion: "Buena Caja Mediana"
    },
    {
        id: 5,
        title: "Caja Chica",
        precio: 100,
        descripcion: "Buena Caja Chica"
    }
    ]
].flat(Infinity)

console.log([products]);


let selectControl = document.querySelector("#products-select");

products.forEach(
    function (product) {
        let option = document.createElement("option");
        option.value = product.id;
        option.innerHTML = product.title;
        selectControl.appendChild(option);

    }
);

let form = document.querySelector("#products");

form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    var data = new FormData(event.target);

    let productId = selectControl.value;
    let selectedProduct = products.find(function (product) {
        return product.id == productId;
    });

    data.append("product-title", selectedProduct.title);

    fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(() => alert("Correo enviado"));

});

let button = form.querySelector("button");

button.addEventListener("click", function (ev) {
    button.style.backgroundColor = "red";
})