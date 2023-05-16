import { Component, OnInit } from '@angular/core';
import { Hardskills } from 'src/app/model/hardskills';
import { Softskills } from 'src/app/model/softskills';
import { HardskillService } from 'src/app/service/hardskill.service';
import { SoftskillsService } from 'src/app/service/softskills.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit{

  ss: Softskills[] = [];

  hs: Hardskills[] = [];

  constructor(private softskillserv: SoftskillsService, private hardskillserv: HardskillService, private tokenService:TokenService){}

  isLogged = false;

  ngOnInit(): void {
    
    this.cargarSS();

    this.cargarHS();

    if(this.tokenService.getToken()){

      this.isLogged = true;

    }else{

      this.isLogged = false;

    }

  }

  cargarSS():void{

    this.softskillserv.listado().subscribe({

      next:(data) =>{

        this.ss = data;

      }

    })

  }

  cargarHS():void{

    this.hardskillserv.listado().subscribe({

      next:(data)=>{

        this.hs = data;

      }

    })

  }

  Eliminacion(id?:number){

    if(id!= undefined){

      this.softskillserv.eliminar(id).subscribe({

        next:()=>{

          this.cargarSS();

        }, error:()=>{

          alert("No se pudo cargar soft skill");

        }

      })

      this.hardskillserv.eliminar(id).subscribe({

        next:()=>{

          this.cargarHS();

        }, error:()=>{

            alert("No se pudo cargar hard skill");


        }

      })

    }


  }

}
