import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ImageService } from 'src/app/service/image.service';
import { ProyectosService } from 'src/app/service/proyectos.service';

@Component({
  selector: 'app-edicion-proyecto',
  templateUrl: './edicion-proyecto.component.html',
  styleUrls: ['./edicion-proyecto.component.css']
})
export class EdicionProyectoComponent implements OnInit{

  proyectos: any | Proyectos = null;

  constructor(private proyectoserv: ProyectosService, private activatedrouter:ActivatedRoute, private router:Router, public ImageService:ImageService){

  }

  ngOnInit(): void {
    
    const id = this.activatedrouter.snapshot.params['id'];

    this.proyectoserv.detalle(id).subscribe({

      next:(data) => {

        this.proyectos = data;

      },

      error:() => {

        alert("Error al modificar proyecto");

        this.router.navigate(['']);

      }
      

    })

  }

  Actualizacion():void{

    const id = this.activatedrouter.snapshot.params['id'];

    this.proyectoserv.actualizar(id, this.proyectos).subscribe(

      {

        next:() => {

          this.router.navigate(['']);

        }, error:() => {

          alert("Error al modificar la experiencia");

          this.router.navigate(['']);

        }

      }

    )

  }



  

}
