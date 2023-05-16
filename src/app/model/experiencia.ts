export class Experiencia {

    id?:number;
    empresa:string;
    puesto:string;
    anioInicio:number;
    anioFin:number;
    descripcion:string;

    constructor(empresa:string, puesto:string, anioInicio:number, anioFin:number, descripcion:string){

        this.empresa = empresa;
        this.puesto = puesto;
        this.anioInicio = anioInicio;
        this.anioFin = anioFin;
        this.descripcion = descripcion;

    }


}
