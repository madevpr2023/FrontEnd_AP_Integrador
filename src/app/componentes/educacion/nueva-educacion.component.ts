import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { Educacioncomp } from 'src/app/model/educacioncomp';
import { EducacionService } from 'src/app/service/educacion.service';
import { EducacioncompService } from 'src/app/service/educacioncomp.service';
import { ImageService } from 'src/app/service/image.service';

@Component({
  selector: 'app-nueva-educacion',
  templateUrl: './nueva-educacion.component.html',
  styleUrls: ['./nueva-educacion.component.css']
})
export class NuevaEducacionComponent implements OnInit{

  institucion:string = '';
  anioInicio:number = 0;
  anioFin:number = 0;
  titulo_obtenido:string = '';
  img:string = '';

  //EducacionComplementaria

  institucion1:string = '';
  curso:string = '';
  anioInicio1:number = 0;
  anioFin1:number = 0;
  img1:string = '';
  

  constructor(private educacioncompserv: EducacioncompService, private educacionserv: EducacionService, private router: Router, public ImageService:ImageService, private activatedrouter:ActivatedRoute){}

  ngOnInit(): void {
    
  }

  Creacion():void{

    const educ = new Educacion(this.institucion, this.anioInicio, this.anioFin, this.titulo_obtenido, this.img);

    educ.img = this.ImageService.url;

    this.educacionserv.guardado(educ).subscribe({

      next:() => {

        alert("Educacion añadida");

        this.router.navigate(['']);

      }, error:() =>{

        alert("Fallo");

        this.router.navigate(['']);

      }

    })

  }

  Creacion1():void{

    const educcomp = new Educacioncomp(this.institucion1, this.curso, this.anioInicio1, this.anioFin1, this.img1);

    educcomp.img1 = this.ImageService.url;

    this.educacioncompserv.guardado(educcomp).subscribe({

      next:() => {

        alert("Educacion Complementaria añadida");

        this.router.navigate(['']);

      },error:() => {

        alert("Fallo");

        this.router.navigate(['']);

      }

    })



  }

  UploadImage($event:any){

    const id = this.activatedrouter.snapshot.params['id'];

    const name = "educacion" + id;

    this.ImageService.UploadImage($event, name);

  }

  UploadImage1($event:any){

    const id = this.activatedrouter.snapshot.params['id'];

    const name = "educacioncomp" + id;

    this.ImageService.UploadImage($event, name);

  }



}
