export class Persona {

    id?:number;
    nombre:string;
    apellido:string;
    puesto:string;
    adress:string;
    descripcion:string;
    img:string;

    constructor(nombre:string, apellido:string, puesto:string, adress:string, descripcion:string, img:string){

        this.nombre = nombre;
        this.apellido = apellido;
        this.puesto = puesto;
        this.adress = adress;
        this.descripcion = descripcion;
        this.img = img;

    }


}
