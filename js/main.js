/* descripcion: Calculadora de costos de productos que aplica descuentos del 10% para productos mayores a $10.000,
 validando que los valores sean enteros
  y mostrando el total acumulado al finalizar.*/

// FUNCION APLICA UN DESCUENTO
function calcularPrecioFinal(precio) {
    let precioFinal;
    
    if (precio > 10000) {
        // Descuento del 10% si el precio es mayor a 10000
        precioFinal = precio * 0.9;
    } else {
        // si el precio es menor o igual a 10000
        precioFinal = precio * 1;
    }

    return precioFinal;
}


// INICIP DEL PROGRAMA


let total = 0;
let agregarOtroProducto = true;

// BUCLE
while (agregarOtroProducto) {
    
    let precio = prompt("Ingrese el precio del producto o escriba '0' para terminar:");
    
    precio = parseFloat(precio);

    // CONDICIONAL
    if (precio === 0) {
        
        agregarOtroProducto = false;
    } else if (!isNaN(precio) && precio > 0) {
        
        let precioConAjuste = calcularPrecioFinal(precio);
        total += precioConAjuste;
        alert("El precio ajustado de este producto es: $" + precioConAjuste);
    } else {
        
        alert("Por favor, ingrese un precio válido.");
    }
}

// MENSAJE FINAL CON EL TOTAL
alert("El costo total de los productos es: $" + total);
