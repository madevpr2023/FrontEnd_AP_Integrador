import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/model/persona';
import { ImageService } from 'src/app/service/image.service';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-edicion-acercade',
  templateUrl: './edicion-acercade.component.html',
  styleUrls: ['./edicion-acercade.component.css']
})
export class EdicionAcercadeComponent implements OnInit{

  persona:any | Persona = null;

  constructor(private personaserv:PersonaService, private activatedrouter:ActivatedRoute, private router:Router, private ImageService:ImageService){

  }

  ngOnInit(): void {
    
    const id = this.activatedrouter.snapshot.params['id'];

    this.personaserv.detalle(id).subscribe({

      next:(data) => {

        this.persona = data;

      },

      error:() => {

        alert("Error al modificar acerca de");

        this.router.navigate(['']);

      }
      

    })

  }

  Actualizacion():void{

    const id = this.activatedrouter.snapshot.params['id'];

    this.persona.img = this.ImageService.url;

    this.personaserv.actualizar(id, this.persona).subscribe(

      {

        next:() => {

          this.router.navigate(['']);

        }, error:() => {

          alert("Error al modificar la acerca de");

          this.router.navigate(['']);

        }

      }

    )

  } 

  UploadImage($event:any){

    const id = this.activatedrouter.snapshot.params['id'];

    const name = "photo" + id;

    this.ImageService.UploadImage($event, name);

  }

}
