import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacioncomp } from 'src/app/model/educacioncomp';
import { EducacioncompService } from 'src/app/service/educacioncomp.service';
import { ImageService } from 'src/app/service/image.service';

@Component({
  selector: 'app-edicion-educcomp',
  templateUrl: './edicion-educcomp.component.html',
  styleUrls: ['./edicion-educcomp.component.css']
})
export class EdicionEduccompComponent implements OnInit{

  educacioncomp: any | Educacioncomp = null;

  constructor(private activatedrouter:ActivatedRoute, private router:Router, private educacioncompserv: EducacioncompService, public imageserv: ImageService){

  }

  ngOnInit(): void {

    const id = this.activatedrouter.snapshot.params['id'];
    
    this.educacioncompserv.detalle(id).subscribe({

      next:(data) => {

        this.educacioncomp = data;

      }, 

      error:() => {

        alert("Error al modificar la educacion complementaria");

        this.router.navigate(['']);

      }

    })


  }

  Actualizacion():void{

    const id = this.activatedrouter.snapshot.params['id'];

    this.educacioncomp.img = this.imageserv.url;

    this.educacioncompserv.actualizar(id, this.educacioncomp).subscribe(

      {

        next:()=>{

          this.router.navigate(['']);

        }, error:()=>{

          alert("Error al modificar la educacion complementaria");

          this.router.navigate(['']);

        }

      }


  )

  }

  UploadImage($event:any){

    const id = this.activatedrouter.snapshot.params['id'];

    const name = "foto_" + id;

    this.imageserv.UploadImage($event, name);

  }

}
