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
        title: "Clutch Italika Ft-110"
    },
        {
            id: 2,
            title: "Clutch Italika Ft-180"
        },
            {
                id: 3,
                title: "Clutch Italika DM 200"
            },
                {
                    id: 4,
                    title: "Clutch Italika DM 250"
                },
                    {
                        id: 5,
                        title: "Clutch Italika Z-250"
                    },
                        {
                            id: 6,
                            title: "Clutch Vento 150"
                        },
                            {
                                id: 7,
                                title: "Cluch Honda XR 150"
                            },
                                {
                                    id: 8,
                                    title: "Clutch Honda Dio 150"
                                },
                                    {
                                        id: 9,
                                        title: "Clutch Zuzuki Gixxer 250"
                                    },
                                        {
                                            id: 10,
                                            title: "Clutch Yamaha XTZ 125"
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