
class Persona{
    nombre: string;
    edad: number;
    constructor(nombre:string, edad:number){
        this.nombre=nombre;
        this.edad=edad;
    }
    imprimir(){
        console.log('Nombre: ' + this.nombre + "Edad: " + this.edad);
    }
}
const persona1 = new Persona('Juan', 30);
persona1.imprimir();
