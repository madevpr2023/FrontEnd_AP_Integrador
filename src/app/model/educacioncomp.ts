export class Educacioncomp {

    id?:number;
    institucion:string;
    curso:string;
    anioInicio:number;
    anioFin:number;
    img1:string;

    constructor(institucion:string, curso:string, anioInicio:number, anioFin:number, img1:string){

        this.institucion = institucion;
        this.curso = curso;
        this.anioInicio = anioInicio;
        this.anioFin = anioFin;
        this.img1 = img1;

    }

}
