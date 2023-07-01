import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';
import { ImageService } from 'src/app/service/image.service';


@Component({
  selector: 'app-edicion-educacion',
  templateUrl: './edicion-educacion.component.html',
  styleUrls: ['./edicion-educacion.component.css']
})
export class EdicionEducacionComponent implements OnInit{

  educacion: any | Educacion = null;


  constructor(private educacionserv: EducacionService, private activatedrouter:ActivatedRoute, private router:Router, public ImageService: ImageService){

  }

  ngOnInit(): void {
    
    const id = this.activatedrouter.snapshot.params['id'];

    this.educacionserv.detalle(id).subscribe({

      next:(data) => {

        this.educacion = data;

      },

      error:() => {

        alert("Error al modificar la educacion");

        this.router.navigate(['']);

      }
      

    })

   
  }

  Actualizacion():void{

    const id = this.activatedrouter.snapshot.params['id'];

    this.educacionserv.actualizar(id, this.educacion).subscribe(

      {

        next:() => {

          this.router.navigate(['']);

        }, error:() => {

          alert("Error al modificar la educacion");

          this.router.navigate(['']);

        }

      }

    )

    

  }

  
  

}
