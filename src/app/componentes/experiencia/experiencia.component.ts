import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/service/experiencia.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit{

  exp: Experiencia[] = [];

  constructor(private experienciaserv: ExperienciaService, private tokenService:TokenService){}

  isLogged = false;

  ngOnInit(): void {
    
    this.cargarExp();

    if(this.tokenService.getToken()){

      this.isLogged = true;

    }else{

      this.isLogged = false;

    }

  }

  cargarExp():void{

    this.experienciaserv.listado().subscribe({

      next:(data) =>{

        this.exp = data;

      }

    })

  }

  Eliminacion(id?:number){

    if(id!= undefined){

      this.experienciaserv.eliminar(id).subscribe({

        next:()=>{

          this.cargarExp();

        }, error:()=>{

          alert("No se pudo cargar la experiencia laboral");

        }

      })

    }


  }

}
