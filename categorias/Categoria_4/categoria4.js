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
        title: "Bomba de Gasolina Yamaha XTZ 125"
    },
        {
            id: 2,
            title: "Bomba de Gasolina Yamaha FZ 125"
        },
            {
                id: 3,
                title: "Bomba de Gasolina Zuzuki Gixxer 250"
            },
                {
                    id: 4,
                    title: "Bomba de Gasolina Honda XR 150"
                },
                    {
                        id: 5,
                        title: "Bomba de Gasolina Honda Dio 150"
                    },
                        {
                            id: 6,
                            title: "Bomba de Gasolina Honda Cargo 150"
                        },
                            {
                                id: 7,
                                title: "Bomba de Gasolina Italika DM 250"
                            },
                                {
                                    id: 8,
                                    title: "Bomba de Gasolina Vento 250"
                                },
                                    {
                                        id: 9,
                                        title: "Bomba de Gasolina KTM Duke 250"
                                    },
                                        {
                                            id: 10,
                                            title: "Bomba de Gasolina Italika Ft-110"
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