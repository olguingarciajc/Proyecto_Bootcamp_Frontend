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
        title: "Faros Led 500 lms "
    },
        {
            id: 2,
            title: "Faros Led 700 lms"
        },
            {
                id: 3,
                title: "Faros led 800 lms"
            },
                {
                    id: 4,
                    title: "Faros led 900 lms"
                },
                    {
                        id: 5,
                        title: "Faros led 1000 lms"
                    }
]


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