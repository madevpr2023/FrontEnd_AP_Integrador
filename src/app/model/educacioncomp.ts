export class Educacioncomp {

    id?:number;
    institucion:string;
    curso:string;
    anioInicio:number;
    anioFin:number;
   

    constructor(institucion:string, curso:string, anioInicio:number, anioFin:number){

        this.institucion = institucion;
        this.curso = curso;
        this.anioInicio = anioInicio;
        this.anioFin = anioFin;
       

    }

}
