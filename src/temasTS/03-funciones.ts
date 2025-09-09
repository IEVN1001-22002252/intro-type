
function sumar(a: number, b: number): number{
    return a + b;
}
console.log(sumar(10,20));

const sumarFlecha = (a: number, b: number): number => a + b;
console.log(sumarFlecha(15,25));

function saludar(nombre: string, apellido?: string): string {
    if(apellido) {
        return 'Hola, ' + nombre + apellido;
    }else {
        return 'Hola, ' + nombre;
    }
}
console.log(saludar('Juan', 'Pérez'));
console.log(saludar('Maria'));

interface Mascota {
    nombre: string;
    tipo?: string;
    edad: number;
    mostrarEdad:()=>void;
}

function calcular(mascotas:Mascota, X: number):void {
    mascotas.edad+=X;
    console.log(mascotas);
    console.log(mascotas.mostrarEdad());
}
const nuevaMacota: Mascota = {
    nombre: 'Luna',
    tipo: 'Gato',
    edad: 3,
    mostrarEdad(){
        console.log('La edad de: ' + this.nombre + " es " + this.edad + " años")
    },
};