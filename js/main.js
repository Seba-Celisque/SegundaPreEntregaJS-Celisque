const productos = [
  {nombre: "Ethios", precio: 125000 },
  {nombre: "Marlin", precio: 300000 },
  {nombre: "Eikon" , precio: 135000 },

];
let carrito = []

let seleccion = prompt("hola desea comprar algun producto")

while(seleccion != "si" && seleccion != "no"){
  alert("por favor ingresa si o no")
}

if(seleccion == "si"){
  alert("a continuacion nuestra lista de productos")
  let todoslosProductos = productos.map((producto) => producto.nombre + " " + producto.precio + "$");
  alert(todoslosProductos.join(" - "))
} else if (seleccion == "no"){
  alert("gracias por venir,hasta pronto !")
}

while(seleccion != "no"){
  let producto = prompt("agrega un producto a tu carrito")
  let precio = 0
 
  if(producto == "Ethios"  || producto == "Marlin"  ||  producto == "Eikon"){
    switch(producto) {
      case "Ethios":
      precio = 125000;
      break;
      case "Marlin":
        precio = 300000;
        break;
        case "Eikon":
          precio = 135000;
          break;
      default:
        break;
    }
    let unidades = parseInt(prompt("Cuantas unidades quiere llevar?"))

    carrito.push({producto, unidades, precio})
  } else {
    alert("no tenemos este producto")
  }

  seleccion = prompt("desea seguir comprando?")

  while(seleccion === "no"){
    alert("gracias por la compra ! hasta pronto")
    carrito.forEach((carritoFinal) => {
      console.log(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades}, total a pagar ${carritoFinal.unidades * carritoFinal.precio}`)
    })
    break;
  }
}

const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0)
console.log(`el total a pagarpor su compra es: ${total}`)
