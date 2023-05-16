export class Educacion {

    id?:number;
    institucion:string;
    anioInicio:number;
    anioFin:number;
    titulo_obtenido:string;
    img:string;

    constructor(institucion:string, anioInicio:number, anioFin:number, titulo_obtenido:string, img:string){

        this.institucion = institucion;
        this.anioInicio = anioInicio;
        this.anioFin = anioFin;
        this.titulo_obtenido = titulo_obtenido;
        this.img = img;


    }

}
