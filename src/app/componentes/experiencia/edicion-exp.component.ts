import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/service/experiencia.service';
import { ImageService } from 'src/app/service/image.service';

@Component({
  selector: 'app-edicion-exp',
  templateUrl: './edicion-exp.component.html',
  styleUrls: ['./edicion-exp.component.css']
})
export class EdicionExpComponent implements OnInit{

  

  experiencia: any | Experiencia = null;

  constructor(private experienciaserv: ExperienciaService, private activatedrouter:ActivatedRoute, private router:Router){

  }

  ngOnInit(): void {
    
    const id = this.activatedrouter.snapshot.params['id'];

    this.experienciaserv.detalle(id).subscribe({

      next:(data) => {

        this.experiencia = data;

      },

      error:() => {

        alert("Error al modificar experiencia");

        this.router.navigate(['']);

      }
      

    })

  }

  Actualizacion():void{

    const id = this.activatedrouter.snapshot.params['id'];

    this.experienciaserv.actualizar(id, this.experiencia).subscribe(

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
