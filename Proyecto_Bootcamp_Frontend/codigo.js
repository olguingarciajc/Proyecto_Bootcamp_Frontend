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
    }
  ];
  
  let selectControl = document.querySelector("#products-select");
  
  products.forEach(
    function(product){
      let option = document.createElement("option");
      option.value = product.id;
      option.innerHTML = product.title;
      selectControl.appendChild(option);
      
    }
  );
  
  let form = document.querySelector("#products");
  
  form.addEventListener("submit",function(ev){
    ev.preventDefault();
    var data = new FormData(event.target);
    
    let productId = selectControl.value;
    let selectedProduct=  products.find(function(product){
      return product.id == productId;
    });
    
    data.append("product-title", selectedProduct.title);
    
    fetch(form.action, {
      method: form.method,
      body: data,
      headers: {
        'Accept': 'application/json'
      }
     }).then(()=> alert("Correo enviado"));
    
  })