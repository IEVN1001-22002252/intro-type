
import { calcularIVADos, Producto } from "./05-desestructuracion-funciones";

const carrito:Producto[] = [
    {
        nombre: 'Iphone 14',
        precio: 1500
    },
    {
        nombre:'Ipad Air',
        precio: 900
    },
    {
        nombre: 'Macbook Pro',
        precio: 2500
    }
];

const [total, iva] = calcularIVADos(carrito);
console.log('El total es: ' + total);
console.log('El iva es: ' + iva);