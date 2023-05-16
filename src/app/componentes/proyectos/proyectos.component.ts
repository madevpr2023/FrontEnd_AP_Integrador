import { Component, OnInit } from '@angular/core';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/service/proyectos.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit{

  proyectos: Proyectos[] = [];

  constructor(private proyectoserv: ProyectosService, private tokenService:TokenService){}

  isLogged = false;

  ngOnInit(): void {
    
    this.cargarPr();

    if(this.tokenService.getToken()){

      this.isLogged = true;

    }else{

      this.isLogged = false;

    }

  }

  cargarPr():void{

    this.proyectoserv.listado().subscribe({

      next:(data) =>{

        this.proyectos = data;

      }

    })

  }

  Eliminacion(id?:number){

    if(id!= undefined){

      this.proyectoserv.eliminar(id).subscribe({

        next:()=>{

          this.cargarPr();

        }, error:()=>{

          alert("No se pudo cargar los proyectos");

        }

      })

    }


  }

}
