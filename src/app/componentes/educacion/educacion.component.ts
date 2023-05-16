import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/educacion';
import { Educacioncomp } from 'src/app/model/educacioncomp';
import { EducacionService } from 'src/app/service/educacion.service';
import { EducacioncompService } from 'src/app/service/educacioncomp.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit{

  educ: Educacion[] = [];

  educcomp: Educacioncomp[] = [];

  constructor(private educacionserv: EducacionService, private educacioncompserv: EducacioncompService, private tokenService:TokenService){}

  isLogged = false;

  ngOnInit(): void {
    
    this.cargarEduc();

    this.cargarEducComp();

    if(this.tokenService.getToken()){

      this.isLogged = true;

    }else{

      this.isLogged = false;

    }

  }

  cargarEduc():void{

    this.educacionserv.listado().subscribe({

      next:(data) =>{

        this.educ = data;

      }

    })

  }

  cargarEducComp():void{

    this.educacioncompserv.listado().subscribe({

      next:(data) => {

        this.educcomp = data;

      }

    })

  }

  Eliminacion(id?:number){

    if(id!= undefined){

      this.educacionserv.eliminar(id).subscribe({

        next:()=>{

          this.cargarEduc();

        }, error:()=>{

          alert("No se pudo cargar la educacion");

        }

      })

      this.educacioncompserv.eliminar(id).subscribe({

        next:()=>{

          this.cargarEducComp();

        }, error:()=>{

          alert("No se pudo cargar la educacion complementaria");

        }

      })

    }


  }

}
