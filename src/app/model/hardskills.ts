export class Hardskills {

    id?:number;
    habilidad:string;
    porcentaje:number;
    img:string;

    constructor(habilidad:string, porcentaje:number, img:string){

        this.habilidad = habilidad;
        this.porcentaje = porcentaje;
        this.img = img;

    }

}
