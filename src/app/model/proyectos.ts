export class Proyectos {

    id?:number;
    nombre:string;
    img:string;
    descripcion:string;
    link:string;

    constructor(nombre:string, img:string,descripcion:string, link:string){

        this.nombre = nombre;
        this.img = img;
        this.descripcion = descripcion;
        this.link = link;

    }

}
