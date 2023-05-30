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
        title: "Porta Estrella Dinamo 200"
    },
        {
            id: 2,
            title: "Porta Estrella Italika DM 200"
        },
            {
                id: 3,
                title: "Porta Estrella Honda XR 150"        
            },
                {
                    id: 4,
                    title: "Porta Estrella Vento Raptor 250"
                },
                    {
                        id: 5,
                        title: "Porta Estrella Honda Cargo 150"
                    },
                        {
                            id: 6,
                            title: "Porta Estrella Yamaha Tennere 250"
                        }

]

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